// import css

import React from 'react';
import './Header.css';
import Nav from '../Nav/Nav';
import SearchForm from '../SearchForm/SearchForm';

const Header = () => {
  return (
    <header className='Header'>
      <div className=' header__container'>
        <div className='header__logo' />
        <Nav />
      </div>

      <SearchForm />
    </header>
  );
};

export default Header;
