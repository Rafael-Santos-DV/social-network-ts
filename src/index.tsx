import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/app';
import { GlobalStyles } from './styles/styleGlobal';


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
