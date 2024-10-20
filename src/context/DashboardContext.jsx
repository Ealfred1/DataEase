import { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import authAxios from '../api/authAxios'; // This is your axios instance with authentication

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state

  // Fetch user data from /users/auth/users/me/
  const fetchUserData = async () => {
    try {
      const { data } = await authAxios.get('/users/auth/users/me/');
      setUser(data); // Store user data in state
    } catch (error) {
      toast.error('Failed to fetch user data.');
      console.error(error);
    } finally {
      setLoading(false); // Done loading
    }
  };

  useEffect(() => {
    // Fetch the user data when the component mounts
    fetchUserData();
  }, []);

  return (
    <DashboardContext.Provider value={{ user, loading }}>
      {children}
    </DashboardContext.Provider>
  );
};
