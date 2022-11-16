import { useState, createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [user, setUser] = useState({
    email: 'tamerjb.98@gmail.com',
    firstName: 'Tamir',
    lastName: 'Jb',
  });
  const navigateTo = useNavigate();

  const handleLogout = () => {
    setLoggedIn(false);
    setUser({
      email: '',
      firstName: '',
      lastName: '',
    });
    navigateTo('/');
  };

  return (
    <AuthContext.Provider
      value={{ loggedIn, setLoggedIn, user, setUser, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export { useAuth };
