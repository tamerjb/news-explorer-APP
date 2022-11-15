// import css

import React from 'react';
import './Header.css';
import Nav from '../Nav/Nav';
import HomeHeader from '../HomeHeader/HomeHeader';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import { useIsHome } from '../../contexts/IsHomeContext';
const Header = () => {
  const { isHome } = useIsHome();
  return (
    <header className={`${isHome ? 'header' : 'header header_bg-light '}`}>
      <div className='header__container'>
        <Nav isHome={isHome} />

        {isHome ? <HomeHeader /> : <SavedNewsHeader />}
        {/* <HomeHeader /> */}
      </div>
    </header>
  );
};

export default Header;
