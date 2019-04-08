import React, {useContext} from 'react';
import {StoreContext} from './store';

const Auth = () =>{
  const [state, dispatch] = useContext(StoreContext)

  return (
    <div>
    <h2>Sign In, User!</h2>
      <button 
        onClick={()=>dispatch({type:'SET_AUTH'})}
      >
        {state.isAuth?'Log Out':'Sign In'}
      </button>
    </div>
  )
}

export default Auth;