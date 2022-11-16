// rafce

import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';
import whiteLogo from '../../images/NewsExplorer_logo_white.svg';
import blackLogo from '../../images/NewsExplorer_logo_black.svg';
import blackBurgerIcon from '../../images/menu_icon_black.svg';
import whiteBurgerIcon from '../../images/menu_icon_white.svg';

import { usePopup } from '../../contexts/PopupsContext';
import { useAuth } from '../../contexts/AuthContext';
import { useIsHome } from '../../contexts/IsHomeContext';

const Nav = () => {
  const { openPopup } = usePopup();
  const { loggedIn, user, handleLogout } = useAuth();
  const { isHome } = useIsHome();

  const handleNavButtonClick = () => {
    !loggedIn ? openPopup('signin') : handleLogout();
    // openPopup('signin');
  };
  const handleMobileNavClick = () => {
    openPopup('mobile');
  };
  return (
    <nav className={`${isHome ? 'nav' : 'nav nav_bg-light'}`}>
      <div className='section nav__container'>
        <div className='nav__logo-container'>
          <img
            src={isHome ? whiteLogo : blackLogo}
            alt='logo'
            className='nav__logo'
          />
        </div>
        <div className='nav__menu'>
          <ul className='nav__menu-list'>
            <li className='nav__menu-item'>
              <NavLink
                end
                to='/'
                className={isHome ? 'nav__link' : 'nav__link nav__link_black'}>
                Home
              </NavLink>
            </li>
            {loggedIn && (
              <li className='nav__menu-item'>
                <NavLink
                  to='/saved-news'
                  className={
                    isHome ? 'nav__link' : 'nav__link nav__link_black'
                  }>
                  {' '}
                  Saved articles
                </NavLink>
              </li>
            )}
          </ul>
          <button
            className={`${
              isHome ? 'nav__button' : 'nav__button nav__button-black '
            }`}
            onClick={handleNavButtonClick}>
            <span className='nav__button-text'>
              {loggedIn ? user.firstName : 'Sign in'}
            </span>
            {loggedIn && (
              <span
                className={`nav__button-icon ${
                  !isHome && 'nav__button-icon_bg_light'
                }`}></span>
            )}
          </button>
        </div>
        <button
          onClick={handleMobileNavClick}
          className='nav__mobile'
          style={{
            backgroundImage: `url(${
              isHome ? whiteBurgerIcon : blackBurgerIcon
            })`,
          }}></button>
      </div>
    </nav>
  );
};

export default Nav;
