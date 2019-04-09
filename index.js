import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Store from './store'
import App from './App'
import './style.css';

render(
  <Store>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Store>, 
  document.getElementById('root')
);
