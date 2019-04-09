import React, {useContext} from 'react';
import {StoreContext} from './store';

const Fruits = () =>{
  const [state, dispatch] = useContext(StoreContext)

  const addBanana = ()=>{
    dispatch({type:'ADD_FRUIT', payload: 'banana'})
    console.log(state)
  }
  const addVeg = ()=>{
    dispatch({type:'ADD_VEGETABLE', payload: 'brocoli'})
    console.log(state)
  }

  return (
    <main>
    <h1>Fruits</h1>
      <div>
        <button 
          onClick={addBanana}
        >
          Add Banana
        </button>
        {state.fruits&&state.fruits.map((fruit, i)=><li key={i+1}>{fruit}</li>)}
      </div>
      <div>
        <button 
          onClick={addVeg}
        >
          Add Brocoli
        </button>
        {state.vegetables&&state.vegetables.map((veg, i)=><li key={i+2}>{veg}</li>)}
      </div>
    </main>
  )
}

export default Fruits;

//{state.fruits.map(fruit=><li>{fruit}</li>)}
//{state.vegetables.map(veg=><li>{veg}</li>)}