import './SearchForm.css';
import React from 'react';

const SearchForm = () => {
  return (
    <section className='search-form'>
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
