import React, {useContext} from 'react';
import {StoreContext} from './store';

const Fruits = () =>{
  const [state, dispatch] = useContext(StoreContext)

  return (
    <main>
    <h1>Fruits</h1>
      <button 
        onClick={()=>dispatch({type:'ADD_FRUIT', payload: 'banana'})}
      >
        Add Banana
      </button>
      {state.fruits.map(fruit=><li>{fruit}</li>)}
    </main>
  )
}

export default Fruits;