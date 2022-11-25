import { createContext, useContext, useState } from 'react';
import { useCurrentUser } from '../utils/user.hooks';
import { useCards } from '../utils/card.hooks';
import { IsHome } from './hooks';

const CurrentUserContext = createContext();

const CurrentUserr = ({ children }) => {
  const currentUser = useCurrentUser();
  const newsCards = useCards();
  const isHome = IsHome();

  const store = {
    currentUser,
    newsCards,
    isHome,
  };

  return (
    <CurrentUserContext.Provider value={store}>
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
