import React, {useContext} from 'react';
import {StoreContext} from './store';

const Fruits = () =>{
  const [state, dispatch] = useContext(StoreContext)

  return (
    <div>
    <h1>Fruits</h1>
      <button 
        onClick={()=>dispatch({type:'ADD_FRUIT', payload: 'banana'})}
      >
        Add Banana
      </button>
      {state.fruits.map(fruit=><li>{fruit}</li>)}
    </div>
  )
}

export default Fruits;