import { createContext, useState } from 'react';
import axiosInstance from '../api/axios';
import authAxios from '../api/authAxios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const navigate = useNavigate();

  // Register user
  const register = async (userData) => {
    try {
      const response = await axiosInstance.post('/users/register/', userData);
      setUser(response.data);
      setOtpSent(true);
      toast.success('Registration successful! OTP sent to your email.');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Registration failed');
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

      // After OTP verification, automatically log the user in
      await loginUser(response.data.username, response.data.password);
    } catch (error) {
      toast.error(error.response?.data?.message || 'OTP verification failed.');
    }
  };

  // Log in user (JWT Authentication)
  const loginUser = async (username, password) => {
    try {
      const { data } = await axiosInstance.post('/users/auth/jwt/create/', { username, password });
      localStorage.setItem('accessToken', data.access);
      localStorage.setItem('refreshToken', data.refresh);
      toast.success('Login successful! Redirecting to dashboard...');
      navigate('/dashboard'); // Redirect after successful login
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed.');
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        otpSent,
        otpVerified,
        register,
        resendOtp,
        verifyOtp,
        loginUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
