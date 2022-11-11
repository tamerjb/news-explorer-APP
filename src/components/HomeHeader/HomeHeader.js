import React from 'react';
import './HomeHeader.css';
const HomeHeader = () => {
  return (
    <div className='homeheader__title-container'>
      <h1 className='homeheader__title'>What's going on in the world?</h1>
      <p className='homeheader__subtitle'>
        Find the latest news on any topic and save them in your personal
        account.
      </p>
    </div>
  );
};

export default HomeHeader;
