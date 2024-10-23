import { createContext, useState, useEffect, useCallback } from 'react';
import axiosInstance from '../api/axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';

export const AuthContext = createContext();

let access_token = null; // Store access token in memory

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
    access_token = null;
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
    toast.error('Session expired. Please log in again.');
    return null;
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(Cookies.get('accessToken') || null); // Initially from cookie or null
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const navigate = useNavigate();

  // Function to refresh token every 4 minutes
  const scheduleTokenRefresh = useCallback(() => {
    const refreshInterval = setInterval(async () => {
      const newToken = await refreshAccessToken();
      if (newToken) {
        setAccessToken(newToken);
      }
    }, 4 * 60 * 1000); // Every 4 minutes

    return () => clearInterval(refreshInterval);
  }, []);

  // Check login status and handle expired token at load
  useEffect(() => {
    const checkLoginStatus = async () => {
      const refreshToken = Cookies.get('refreshToken');
      if (accessToken) {
        // If access token exists, use it and set interval to refresh it before expiration
        access_token = accessToken;
        scheduleTokenRefresh();
      } else if (refreshToken) {
        // If no access token but refresh token exists, refresh the access token immediately
        const newAccessToken = await refreshAccessToken();
        if (newAccessToken) {
          setAccessToken(newAccessToken);
          access_token = newAccessToken;
          scheduleTokenRefresh(); // Start token refresh interval
        } else {
          // If token refresh fails, log out user
          logout();
        }
      } else {
        // If no refresh token, log out
        logout();
      }
    };

    checkLoginStatus();
  }, [accessToken, scheduleTokenRefresh]);

  // Register user
  const register = async (userData) => {
    try {
      const response = await axiosInstance.post('/users/register/', userData);
      setUser(response.data);
      setOtpSent(true);
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
      setOtpVerified(true);
      toast.success('Verification Successful!');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error.response?.data?.error || 'OTP verification failed.');
    }
  };

  // Log in user (JWT Authentication)
  const loginUser = async (username, password) => {
    try {
      const { data } = await axiosInstance.post('/users/auth/jwt/create/', { username, password });
      console.log(data.access)
      setAccessToken(data.access);
      access_token = data.access; // Store in memory
      Cookies.set('accessToken', data.access); // Optionally store access token
      Cookies.set('refreshToken', data.refresh, { httpOnly: true, secure: true }); // Store refresh token in secure cookie

      toast.success('Login successful!');
      scheduleTokenRefresh(); // Start token refresh interval after login
      navigate('/dashboard'); // Redirect after successful login
    } catch (error) {
      handleError(error);
    }
  };

  // Resend OTP
  const resendOtp = async (email) => {
    try {
      await axiosInstance.post('/users/resend-otp/', { email });
      toast.success('OTP resent to your email.');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to resend OTP.');
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
    } else if (error.response.status === 401) {
      toast.error(error.response.data.detail);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        accessToken,
        otpSent,
        otpVerified,
        register,
        verifyOtp,
        loginUser,
        refreshAccessToken,
        resendOtp,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
