// import css

import React from 'react';
import './Header.css';
import Nav from '../Nav/Nav';
import SearchForm from '../SearchForm/SearchForm';
import HomeHeader from '../HomeHeader/HomeHeader';
const Header = () => {
  return (
    <header className='Header'>
      <div className=' header__container'>
        <div className='header__logo' />
        <Nav />
      </div>
      <HomeHeader />
      <SearchForm />
    </header>
  );
};

export default Header;
