import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './sass/style.sass'
import { StoreProvider } from './store'

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>, 
  document.getElementById('root')
);
