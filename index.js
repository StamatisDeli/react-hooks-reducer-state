import React from 'react';
import { render } from 'react-dom';
import Store from './store'
import App from './App'
import './style.css';

render(
  <Store>
    <App />
  </Store>, 
  document.getElementById('root')
);
