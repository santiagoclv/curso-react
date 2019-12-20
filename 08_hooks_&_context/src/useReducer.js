import React,{ useReducer } from 'react';

function reducer(state,action){
    switch(action.type){
        case 'increment':
            return { count:state.count + 1}
        case 'decrement':
            return { count:state.count - 1}
        case 'clear':
            return { count: action.payload}
        default:
            throw new Error();
    }
}


const ReducerComp = ({initialCount}) => {
    //const initialState = {count:initialCount}

    const [state,dispatch] = useReducer(reducer,{count:initialCount});


  return (
    <>
      <h3>Count: {state.count}</h3>
      <button onClick={ ()=> dispatch({ type:'increment'}) }>Add one +</button>
      <button onClick={ ()=> dispatch({ type:'decrement'}) }>Rest one -</button>
      <button onClick={ ()=> dispatch({ type: 'clear',payload:initialCount }) }>Reset</button>
    </>
  )
}


export default ReducerComp;
