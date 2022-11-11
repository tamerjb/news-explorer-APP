import React, { useEffect } from 'react';
import './Popup.css';

const Popup = ({ isOpen, onClose, name, children }) => {
  useEffect(() => {
    if (!isOpen) return;

    function handleEscClose(evt) {
      if (evt.key === 'Escape') {
        onClose();
      }
    }

    function handleOverlayClickClose() {
      if (!isOpen) {
        onClose();
      }
    }

    document.addEventListener('keydown', handleEscClose);

    document.addEventListener('click', handleOverlayClickClose);

    return () => {
      document.removeEventListener('keydown', handleEscClose);

      document.removeEventListener('click', handleOverlayClickClose);
    };
  }, [isOpen, onClose]);

  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''} popup_type_${name}`}>
      <div className={`popup__container popup__container_type_${name}`}>
        {children}
        <button
          className={`popup__close-button ${`popup__close-button_type_${name}`}`}
          type='button'
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default Popup;
