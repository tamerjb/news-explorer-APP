// import css

import React from 'react';
import Nav from '../Nav/Nav';

const Header = () => {
  return (
    <header className='Header'>
      <div className='section header__container'>
        <p className='header__title'>NewsExplorer</p>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
