import { createContext, useState, useEffect, useContext } from 'react';
import { toast } from 'react-toastify';
import authAxios from '../api/authAxios'; // Updated axios instance
import { AuthContext, refreshAccessToken } from './AuthContext'; // Import the AuthContext

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
  const [loading, setLoading] = useState(true);
  const { loginUser, accessToken } = useContext(AuthContext); // Access login function and token from AuthContext


  const fetchUserData = async () => {
    try {
      const { data } = await authAxios.get('/users/auth/users/me/');
      setUser(data); // Store user data in state
      localStorage.setItem('user', JSON.stringify(data)); // Store user data in local storage
    } catch (error) {
      if (error.response?.status === 401) {
        await refreshAccessToken()
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
    if (accessToken) {
      fetchUserData();
    }
  }, [accessToken]);

  return (
    <DashboardContext.Provider value={{ user, loading }}>
      {children}
    </DashboardContext.Provider>
  );
};
