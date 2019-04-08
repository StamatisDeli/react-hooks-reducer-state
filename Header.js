import React, {useContext} from 'react';
import {StoreContext} from './store';

const Header = () =>{
  const [state, dispatch] = useContext(StoreContext)

  return (
    <div>
      <h3>{state.isAuth?'User Singned In': 'No User'}</h3>
    </div>
  )
}

export default Header;