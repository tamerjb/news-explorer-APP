import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import { GlobalProvider } from './globalContext/GlobalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalProvider>
      <Router>
        <App />
      </Router>
    </GlobalProvider>
  </React.StrictMode>
);
