import { createContext, useState } from 'react'
import axios from '../axios'
import authAxios from '../authAxios'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const navigate = useNavigate();

  // Register user
  const register = async (userData) => {
    try {
      const response = await axiosInstance.post('/users/register', userData);
      setUser(response.data);
      // After registration, OTP is sent automatically, set flag
      setOtpSent(true);
    } catch (error) {
      console.error('Registration error:', error.response.data);
    }
  };

  // Resend OTP
  const resendOtp = async (email) => {
    try {
      await axiosInstance.post('/users/resend-otp', { email });
    } catch (error) {
      console.error('Resend OTP error:', error.response.data);
    }
  };

  // Verify OTP
  const verifyOtp = async (email, otp) => {
    try {
      const response = await axiosInstance.post('/users/verify-otp', { email, otp });
      setOtpVerified(true);
      setUser(response.data);
      localStorage.setItem('token', response.data.token); // Save token for authenticated requests
      navigate('/dashboard'); // Navigate to dashboard or any page after verification
    } catch (error) {
      console.error('OTP verification error:', error.response.data);
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
