import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from "react-router-dom";
import Header from './Header'
import Fruits from './Fruits'
import Auth from './Auth'
import About from './About'

const App = () => {
    return (
      <>
      <Header />
      <Switch>
        <Route exact path="/" component={Fruits} />
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/about" component={About} />
      </Switch>
      </>
    );
}

export default App