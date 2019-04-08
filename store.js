import React, {createContext, useReducer} from 'react';

export const StoreContext = createContext({})

const initialState = {
  fruits:[], 
  vegetables:[],
  isAuth: false
}

function reducer (state, action){
  switch(action.type){
  case 'ADD_FRUIT':
    return { fruits: [...state.fruits, action.payload] };
  case 'ADD_VEGETABLE':
    return { vegetables: [...state.vegetables, action.payload] };
  case 'SET_AUTH':
    return { ...state, isAuth: !state.isAuth };
  // TODO:
  // Write an action in separate module ./actions.js
  case 'MIX_FRUIT':
    return mixFruit(state, action);
  default: throw new Error ('Action type must be defined')
  }
}

const Store = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  )
}

export default Store