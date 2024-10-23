import axios from 'axios';
import { getAccess_token, refreshAccessToken } from '../context/AuthContext'; // Import token getter and refresh function

const authAxios = axios.create({
  baseURL: 'https://vtu-h5yu.onrender.com/', // Your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to include Bearer token for authenticated requests
authAxios.interceptors.request.use(
  async (config) => {
    let token = getAccess_token(); // Retrieve the token stored in memory
    if (!token) {
      token = await refreshAccessToken(); // Refresh token if it's not available
    }
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor to refresh token on 401 response (token expired)
authAxios.interceptors.response.use(
  (response) => response, // Pass through if no error
  async (error) => {
    const originalRequest = error.config;

    // Handle 401 (Unauthorized) error
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Attempt to refresh the token
        const newToken = await refreshAccessToken();
        if (newToken) {
          // Retry the original request with the new token
          originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
          return authAxios(originalRequest);
        }
      } catch (refreshError) {
        // If token refresh fails, logout or handle the error as needed
        console.error('Token refresh failed:', refreshError);
        return Promise.reject(refreshError);
      }
    }

    // Reject other errors
    return Promise.reject(error);
  }
);

export default authAxios;
