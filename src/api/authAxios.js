import axios from 'axios';

const authAxios = axios.create({
  baseURL: 'https://vtu-h5yu.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to include Bearer token for authenticated requests
authAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default authAxios;
