import React, { useEffect } from 'react';
import './MobileMenu.css';
import logo from '../../images/NewsExplorer_logo_white.svg';
import logOutIcon from '../../images/logout_icon_white.svg';

import { NavLink } from 'react-router-dom';
import { useAuth } from '../../contexts/CurrentUserContext';
import { usePopup } from '../../contexts/PopupsContext';

const MobileMenu = () => {
  const { loggedIn, user, handleLogout } = useAuth();
  const { closeAllPopups, popupsState, openPopup } = usePopup();
  const { mobile } = popupsState;

  const handleAuthButtonClick = () => {
    if (loggedIn) {
      handleLogout();
      closeAllPopups();
    } else {
      openPopup('signin');
    }
  };

  useEffect(() => {
    if (!mobile) return;

    function handleEscClose(evt) {
      if (evt.key === 'Escape') {
        closeAllPopups();
      }
    }

    function handleOverlayClickClose(evt) {
      if (evt.target.classList.contains('mobile-menu_opened')) {
        closeAllPopups();
      }
    }

    document.addEventListener('keydown', handleEscClose);
    document.addEventListener('click', handleOverlayClickClose);

    return () => {
      document.removeEventListener('keydown', handleEscClose);
      document.removeEventListener('click', handleOverlayClickClose);
    };
  }, [mobile, closeAllPopups]);

  return (
    <div
      className={`${
        mobile ? 'mobile-menu mobile-menu_opened' : 'mobile-menu'
      }`}>
      <div className='mobile-menu__container'>
        <div className='mobile-menu__top-bar'>
          <div className='mobile-menu__logo-container'>
            <img src={logo} alt='logo' className='mobile-menu__logo' />
          </div>
          <button
            type='button'
            className='mobile-menu__close-button'
            aria-label='close button'
            onClick={closeAllPopups}></button>
        </div>
        <nav className='mobile-menu__nav'>
          <ul className='mobile-menu__nav-list'>
            <li className='mobile-menu__list-item'>
              <NavLink
                end
                to='/'
                className='mobile-menu__link'
                activeclassname='mobile-menu__link_active'>
                Home
              </NavLink>
            </li>
            {loggedIn && (
              <li className='mobile-menu__list-item'>
                <NavLink
                  to='/saved-news'
                  className='mobile-menu__link'
                  activeclassname='mobile-menu__link_active'>
                  Saved articles
                </NavLink>
              </li>
            )}
          </ul>

          <button
            className='mobile-menu__button'
            onClick={handleAuthButtonClick}>
            <span className='mobile-menu__button-text'>
              {loggedIn ? user : 'Sign in'}
            </span>
            {loggedIn && (
              <img
                className='mobile-menu__icon'
                src={logOutIcon}
                alt='logout'
              />
            )}
          </button>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
