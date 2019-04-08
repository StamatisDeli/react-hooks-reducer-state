import React from 'react';
import Store from './store'
import Header from './Header'
import Auth from './Auth'
import Fruits from './Fruits'

const App = () => {
    return (
      <Store>
        <Header />
        <Auth />
        <Fruits />
      </Store>
    );
}

export default App