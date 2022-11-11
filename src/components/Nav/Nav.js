// rafce

import React from 'react';
import './Nav.css';
// import { usePopup } from '../../contexts/PopupsContext';
// import Signin from '../Signin/Signin';

const Nav = ({ isOpen, OnClose }) => {
  const handleNavButtonClick = () => {
    //  !loggedIn ? openPopup('signin') : handleLogout();
  };
  return (
    <div className='nav__container'>
      <button className='nav__button-home' type='button'>
        Home
      </button>
      <button className='nav__button-savedArticles' type='button'>
        Saved Articles
      </button>

      <button
        onClick={handleNavButtonClick}
        className='nav__button-signin'
        type='button'>
        Sign In
      </button>
      {/* <button
        className='nav__button-signout'
        type='button'
        // onClick={closeMobileNav}
      /> */}
    </div>
  );
};

export default Nav;
