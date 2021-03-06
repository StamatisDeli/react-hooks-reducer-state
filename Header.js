import React, {useContext} from 'react';
import {StoreContext} from './store';
import { Link } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

const Header = () =>{
  const [state, dispatch] = useContext(StoreContext)

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
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