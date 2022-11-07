import './SearchForm.css';
import React from 'react';

const SearchForm = () => {
  return (
    <section className='search-form'>
      <div className='search-form__title-container'>
        <h1 className='search-form__title'>What's going on in the world?</h1>
        <p className='search-form__subtitle'>
          Find the latest news on any topic and save them in your personal
          account.
        </p>
      </div>
      <form className='search-form__search'>
        <input
          className='search-form__search-text'
          type='text'
          placeholder='Enter topic'
        />
        <button className='search-form__search-button' type='submit'>
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
