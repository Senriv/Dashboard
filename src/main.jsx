import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Global } from '@emotion/react';
import { GlobalStyles } from './styles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global styles={GlobalStyles} />
    <BrowserRouter basename="/Dashboard">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
