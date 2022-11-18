import React from 'react';
import './HeaderContent.css';
import SearchForm from '../SearchForm/SearchForm';

const HeaderContent = () => {
  return (
    <div className='header__container__content'>
      <h1 className='header__container__content-title'>
        What's going on in the world?
      </h1>
      <p className='header__container__content-subtitle'>
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <SearchForm />
    </div>
  );
};

export default HeaderContent;
