import { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import authAxios from '../api/authAxios'; // Updated axios instance

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loading, setLoading] = useState(true);


  const fetchUserData = async () => {
    try {
      const { data } = await authAxios.get('/users/auth/users/me/');
      setUser(data); // Store user data in state
      localStorage.setItem('user', JSON.stringify(data)); // Store user data in local storage
    } catch (error) {
      if (error.response?.status === 401) {
        // This will be handled by axios interceptor automatically
        toast.error('Unauthorized. Please log in again.');
      } else {
        toast.error('Failed to fetch user data.');
      }
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <DashboardContext.Provider value={{ user, loading }}>
      {children}
    </DashboardContext.Provider>
  );
};
