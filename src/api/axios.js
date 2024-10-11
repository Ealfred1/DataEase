import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://vtu-h5yu.onrender.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
