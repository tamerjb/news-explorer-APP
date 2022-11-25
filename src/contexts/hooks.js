import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const IsHome = () => {
  const [Home, setIsHome] = useState(true);
  const location = useLocation();
  useEffect(() => {
    location.pathname === '/' ? setIsHome(true) : setIsHome(false);
  }, [Home, location]);

  return Home;
};
