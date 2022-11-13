// rafce

import React from 'react';
import './Nav.css';
// import Signin from '../Signin/Signin';
import { usePopup } from '../../contexts/PopupsContext';

const Nav = () => {
  const { openPopup } = usePopup();
  const handleNavButtonClick = () => {
    //  !loggedIn ? openPopup('signin') : handleLogout();
    openPopup('signin');
  };
  return (
    <div className='nav__container'>
      <button className='nav__button-home' type='button'>
        Home
      </button>
      <button className='nav__button-savedArticles' type='button'>
        Saved Articles
      </button>

      <button onClick={handleNavButtonClick} className='nav__button-signin'>
        {' '}
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
