import { useState, useEffect } from 'react';
import { 
  saveAuth, 
  getAuth, 
  removeAuth, 
  saveUserDataByEmail, 
  getUserDataByEmail, 
  removeUserDataByEmail 
} from '../utils/localStorage';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    if (auth && auth.email) {
      const userData = getUserDataByEmail(auth.email);
      if (userData) {
        setIsAuthenticated(true);
        setUser(userData);
      }
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // In a real app, you'd validate credentials with an API
    const authData = { email, loggedIn: true, timestamp: Date.now() };
    const userData = getUserDataByEmail(email) || { email, fullName: 'User' };
    
    saveAuth(authData);
    setIsAuthenticated(true);
    setUser(userData);
    
    return true;
  };

  const register = (formData) => {
    const authData = { email: formData.email, loggedIn: true, timestamp: Date.now() };
    const userData = {
      fullName: formData.fullName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      companyName: formData.companyName,
      isAgency: formData.isAgency,
      profileImage: formData.profileImage || null
    };
    
    saveAuth(authData);
    saveUserDataByEmail(formData.email, userData);
    setIsAuthenticated(true);
    setUser(userData);
    
    return true;
  };

  const logout = () => {
    // Do not remove user data on logout to preserve user profile
    removeAuth();
    setIsAuthenticated(false);
    setUser(null);
  };

  const updateUser = (userData) => {
    if (userData.email) {
      saveUserDataByEmail(userData.email, userData);
    }
    setUser(userData);
  };

  return {
    isAuthenticated,
    user,
    loading,
    login,
    register,
    logout,
    updateUser
  };
};
