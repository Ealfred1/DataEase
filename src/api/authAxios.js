import axios from 'axios';
import { getAccess_token, refreshAccessToken } from './AuthProvider'; // Import the token getter and refresh function

const authAxios = axios.create({
  baseURL: 'https://vtu-h5yu.onrender.com/', // Your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to include Bearer token for authenticated requests
authAxios.interceptors.request.use(
  async (config) => {
    const token = getAccess_token(); // Retrieve the token stored in memory
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
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    
    // If we get a 401 error and the request has not been retried
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        // Attempt to refresh the access token
        await refreshAccessToken(); 
        
        const newToken = getAccess_token(); // Get the new token after refresh
        if (newToken) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
          return authAxios(originalRequest); // Retry the original request
        }
      } catch (err) {
        // If token refresh fails, log the user out or handle the error as needed
        return Promise.reject(err);
      }
    }

    return Promise.reject(error); // Reject other errors
  }
);

export default authAxios;
