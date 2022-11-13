import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Popups from '../Popup/Popups';

import Main from '../Main/Main';

function App() {
  return (
    <div className='App'>
      <Header />
      {/* <SavedNews /> */}

      <Main />
      <Footer />
      <Popups />
    </div>
  );
}

export default App;
