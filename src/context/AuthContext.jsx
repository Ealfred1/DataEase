import { createContext, useState, useEffect } from 'react';
import axiosInstance from '../api/axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';

export const AuthContext = createContext();

let access_token = null; // Store in memory

export const getAccess_token = () => access_token;

// Refresh access token using the refresh token
export const refreshAccessToken = async () => {
  try {
    const refreshToken = Cookies.get('refreshToken');
    if (refreshToken) {
      const { data } = await axiosInstance.post('/users/auth/jwt/refresh/', { refresh: refreshToken });
      access_token = data.access; // Store the new access token in memory
      Cookies.set('accessToken', data.access); // Optionally store it in a cookie for easy retrieval
      return data.access;
    }
  } catch (error) {
    toast.error('Session expired. Please log in again.');
    return null;
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null); // Store token in memory
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const navigate = useNavigate();

  // Check if access token exists or refresh it when the page loads
  useEffect(() => {
    const checkLoginStatus = async () => {
      const storedAccessToken = Cookies.get('accessToken');
      const refreshToken = Cookies.get('refreshToken');
      
      if (storedAccessToken) {
        // If we have a valid access token in cookies, set it in memory
        setAccessToken(storedAccessToken);
        access_token = storedAccessToken;
      } else if (refreshToken) {
        // If no valid access token but refresh token exists, refresh the access token
        const newAccessToken = await refreshAccessToken();
        if (newAccessToken) {
          setAccessToken(newAccessToken);
          access_token = newAccessToken;
          navigate('/dashboard'); // Automatically navigate to dashboard if refreshed
        }
      } else {
        // If no tokens, redirect to login
        navigate('/login');
      }
    };

    checkLoginStatus();
  }, [navigate]);

  // Register user
  const register = async (userData) => {
    try {
      const response = await axiosInstance.post('/users/register/', userData);
      setUser(response.data);
      toast.success('Registration successful! OTP sent to your email.');
    } catch (error) {
      handleError(error);
    }
  };

  // Verify OTP and log in user
  const verifyOtp = async (email, otp) => {
    try {
      const response = await axiosInstance.post('/users/verify-otp/', { email, otp });
      setUser(response.data);
      toast.success('Verification Successful!');
    } catch (error) {
      toast.error(error.response?.data?.message || 'OTP verification failed.');
    }
  };

  // Log in user (JWT Authentication)
  const loginUser = async (username, password) => {
    try {
      const { data } = await axiosInstance.post('/users/auth/jwt/create/', { username, password });
      setAccessToken(data.access);
      access_token = data.access; // Store in memory
      Cookies.set('accessToken', data.access); // Optionally store access token
      Cookies.set('refreshToken', data.refresh, { httpOnly: true, secure: true }); // Store refresh token in secure cookie

      toast.success('Login successful!');
      navigate('/dashboard'); // Redirect after successful login
    } catch (error) {
      handleError(error);
    }
  };

  // Log out user and clear tokens
  const logout = () => {
    setAccessToken(null);
    access_token = null;
    setUser(null);
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
    navigate('/login');
    toast.success('Logged out successfully.');
  };

  // Handle Errors
  const handleError = (error) => {
    const errors = error.response?.data || {};
    if (errors.email) {
      toast.error(errors.email[0]);
    } else if (errors.username) {
      toast.error(errors.username[0]);
    } else {
      toast.error('An error occurred.');
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        accessToken,
        register,
        verifyOtp,
        loginUser,
        refreshAccessToken,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};