import React, {useContext} from 'react';
import {StoreContext} from './store';
import { Link } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import Fruits from "./Fruits"
import Auth from "./Auth"

const Header = () =>{
  const [state, dispatch] = useContext(StoreContext)

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Fruits</Link>
          </li>
          <li>
            <Link to="/auth">Auth</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
        </ul>
      <div>
        <h3>{state.isAuth?'User Signed In': 'No User'}</h3>
      </div>
      </nav>
  </header>
  )
}

export default Header;