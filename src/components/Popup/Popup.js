import React, { useEffect } from 'react';
import './Popup.css';
import { usePopup } from '../../contexts/PopupsContext';

const Popup = ({ isOpen, name, children }) => {
  const popupsContext = usePopup();

  useEffect(() => {
    if (!isOpen) return;

    function handleEscClose(evt) {
      if (evt.key === 'Escape') {
        popupsContext.closeAllPopups();
      }
    }

    function handleOverlayClickClose(evt) {
      if (evt.target.classList.contains('popup_opened')) {
        popupsContext.closeAllPopups();
      }
    }

    document.addEventListener('keydown', handleEscClose);
    document.addEventListener('click', handleOverlayClickClose);

    return () => {
      document.removeEventListener('keydown', handleEscClose);
      document.removeEventListener('click', handleOverlayClickClose);
    };
  }, [isOpen, popupsContext.closeAllPopups]);

  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''} popup_type_${name}`}>
      <div className={`popup__container popup__container_type_${name}`}>
        {children}
        <button
          className={`popup__close-button ${`popup__close-button_type_${name}`}`}
          type='button'
          onClick={popupsContext.closeAllPopups}
        />
      </div>
    </div>
  );
};

export default Popup;
