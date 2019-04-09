import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from "react-router-dom";
import Header from './Header'
import Home from './Home'
import Auth from './Auth'
import About from './About'

const App = (props) => {
    return (
      <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/about" component={About} />
      </Switch>
      {props.children}
      </>
    );
}

export default App