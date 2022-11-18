// import css

import React from 'react';
import './Header.css';
import Nav from '../Nav/Nav';
import HeaderContent from '../HeaderContent/HeaderContent';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import { useIsHome } from '../../contexts/IsHomeContext';
const Header = () => {
  const { isHome } = useIsHome();
  return (
    <header className={`${isHome ? 'header' : 'header header_bg-light '}`}>
      <div className='header__container'>
        <Nav isHome={isHome} />

        {isHome ? <HeaderContent /> : <SavedNewsHeader />}
        {/* <HeaderContent /> */}
      </div>
    </header>
  );
};

export default Header;
