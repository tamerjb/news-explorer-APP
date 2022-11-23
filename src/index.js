import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import PopupContextProvider from './contexts/PopupsContext';
import ArticlesContextProvider from './contexts/ArticlesContext';
import IsHomeContextProvider from './contexts/IsHomeContext';
import AuthContextProvider from './contexts/CurrentUserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <IsHomeContextProvider>
          <PopupContextProvider>
            <ArticlesContextProvider>
              <App />
            </ArticlesContextProvider>
          </PopupContextProvider>
        </IsHomeContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
