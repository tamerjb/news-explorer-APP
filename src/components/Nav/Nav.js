// rafce

import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <div className='nav__container'>
      <button className='nav__button-home' type='button'>
        Home
      </button>
      <button className='nav__button-savedArticles' type='button'>
        Saved Articles
      </button>

      <button className='nav__button-signin' type='button'>
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
