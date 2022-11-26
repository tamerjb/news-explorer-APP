import React from 'react';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useStore } from '../../globalContext/GlobalContext';

export default function ProtectedRoute({ isLoggedIn, children }) {
  const { openPopup } = useStore().popupWithForm;

  useEffect(() => {
    if (!isLoggedIn) {
      openPopup();
    }
  }, [isLoggedIn, openPopup]);

  return isLoggedIn ? children : <Navigate to='/' />;
}
