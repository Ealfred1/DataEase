import axios from 'axios';

const authAxios = axios.create({
  baseURL: 'https://vtu-h5yu.onrender.com/api', // Change this to your base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add an interceptor to include the Bearer token
authAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // Assume token is stored in localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default authAxios;
