import { createContext, useContext } from 'react';
import { useCurrentUser } from '../utils/user.hooks';

const CurrentUserContext = createContext();

const CurrentUserr = ({ children }) => {
  const currentUser = useCurrentUser();

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserr;

const useAuth = () => {
  const value = useContext(CurrentUserContext);
  return value;
};

export { useAuth };
