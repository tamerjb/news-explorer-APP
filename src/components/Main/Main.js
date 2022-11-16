import React from 'react';
import About from '../About/About';
import SearchResults from '../SearchResults/SearchResults';
// import Preloader from '../Preloader/Preloader';
// import NotFound from '../NotFound/NotFound';

export const Main = () => {
  return (
    <main className='main'>
      <SearchResults />

      <About />
    </main>
  );
};

export default Main;
