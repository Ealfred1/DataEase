import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://vtu-h5yu.onrender.com/api/', // Change this to your base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
