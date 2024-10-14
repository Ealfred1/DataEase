import { createContext, useState, useEffect } from 'react';
import axiosInstance from '../api/axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie'; // To manage HTTP-only cookies

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [accessToken, setAccessToken] = useState(null); // Store token in memory
  const navigate = useNavigate();

  useEffect(() => {
    // Try to load the access token from cookies (if available)
    const storedAccessToken = Cookies.get('accessToken');
    if (storedAccessToken) {
      setAccessToken(storedAccessToken);
    }
  }, []);

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

  // Resend OTP
  const resendOtp = async (email) => {
    try {
      await axiosInstance.post('/users/resend-otp/', { email });
      toast.success('OTP resent to your email.');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to resend OTP.');
    }
  };

  // Verify OTP and log in user
  const verifyOtp = async (email, otp) => {
    try {
      const response = await axiosInstance.post('/users/verify-otp/', { email, otp });
      setUser(response.data);
      setOtpVerified(true);
      toast.success('Verification Successful!');
    } catch (error) {
      toast.error(error.response?.data?.message || 'OTP verification failed.');
    }
  };

  // Log in user (JWT Authentication)
  const loginUser = async (username, password) => {
    try {
      const { data } = await axiosInstance.post('/users/auth/jwt/create/', { username, password });
      // Store tokens securely
      setAccessToken(data.access);  // Store in memory
      Cookies.set('refreshToken', data.refresh, { httpOnly: true, secure: true }); // HTTP-only cookie

      toast.success('Login successful!');
      navigate('/dashboard'); // Redirect after successful login
    } catch (error) {
      handleError(error);
    }
  };

  // Refresh access token when expired
  const refreshAccessToken = async () => {
    try {
      const refreshToken = Cookies.get('refreshToken');
      if (refreshToken) {
        const { data } = await axiosInstance.post('/users/auth/jwt/refresh/', { refresh: refreshToken });
        setAccessToken(data.access); // Update access token in memory
      } else {
        navigate('/login');
      }
    } catch (error) {
      toast.error('Session expired. Please log in again.');
      logout(); // Log out user if refresh token fails
    }
  };

  // Log out user and clear tokens
  const logout = () => {
    setAccessToken(null);
    setUser(null);
    Cookies.remove('refreshToken'); // Remove refresh token cookie
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
        otpSent,
        otpVerified,
        accessToken,
        register,
        resendOtp,
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
