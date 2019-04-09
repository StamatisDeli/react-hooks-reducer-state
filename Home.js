import React, {useContext} from 'react';
import {StoreContext} from './store';
import { fetchDataAction } from "./Actions";
import Episodes from "./Episodes";
// const Episodes = React.lazy(() => import("./Episodes"));
// something wrong with loading images cors problem
// I still am not sure 'props' is necessary
const Fruits = (props) =>{
  const [state, dispatch] = useContext(StoreContext)

  const addBanana = ()=>{
    dispatch({type:'ADD_FRUIT', payload: 'banana'})
    console.log(state)
  }
  const addVeg = ()=>{
    dispatch({type:'ADD_VEGETABLE', payload: 'brocoli'})
    console.log(state)
  }
  // it works!
  React.useEffect(() => {
    console.log("state:", state)
    }, [state]
  );
  // fetching data from db
  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
    },[state],
    console.log(state.episodes)
  );

  const props = {
    episodes: state.episodes,
    state: { state, dispatch }
  };

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
      <br></br>
      <Episodes {...props}/>
    </main>
  )
}

export default Fruits;