import React, {createContext, useReducer} from 'react';

export const StoreContext = createContext({})

const initialState = {
  fruits:[], 
  vegetables:[],
  isAuth: false,
  episodes: []
}

function reducer (state=initialState, action){
  switch(action.type){
  case 'ADD_FRUIT':
    return { ...state, fruits: [...state.fruits, action.payload] };
  case 'ADD_VEGETABLE':
    return { ...state,  vegetables: [...state.vegetables, action.payload] };
  case 'SET_AUTH':
    return { ...state, isAuth: !state.isAuth };
  // TODO:
  // Write an action in separate module ./actions.js
  case 'MIX_FRUIT':
    return mixFruit(state, action);
  // Testing data fetch
  case "FETCH_DATA":
  return { ...state, episodes: action.payload };
  
  default: return state;
  }
}

const Store = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {props.children}
    </StoreContext.Provider>
  )
}
// const Store = ({children}) => {
//   const [state, dispatch] = useReducer(reducer, initialState)
//   return (
//     <StoreContext.Provider value={[state, dispatch]}>
//       {children}
//     </StoreContext.Provider>
//   )
// }
export default Store