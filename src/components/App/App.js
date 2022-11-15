import { Routes, Route } from 'react-router-dom';
import './App.css';

import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Popups from '../Popup/Popups';
import SavedNews from '../SavedNews/SavedNews';

import Main from '../Main/Main';

function App() {
  return (
    <div className='App'>
      <Header />

      <Routes>
        <Route path='/saved-news' element={<SavedNews />} />
        <Route exact path='/' element={<Main />} />
        <Route path='*' element={<Main />} />
      </Routes>

      <Footer />
      <Popups />
    </div>
  );
}

export default App;
