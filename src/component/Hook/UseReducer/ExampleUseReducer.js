import React,{useReducer} from 'react'


const initialState ={count:0};

function reducer(state,action){
    switch(action.type){
        case 'increment':
            return {count:state.count+1}
        case 'decrement':
            return {count:state.count-1}
        default: throw new Error();
    }
}

function ExampleUseReducer() {

const [state,dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        count: {state.count}
        <button onClick={()=>dispatch({type:'increment'})}>-</button>
        <button onClick={()=>dispatch({type:'decrement'})}>+</button>
    </div>
  )
}

export default ExampleUseReducer



// syntax 

// const [state, dispatch] = useReducer(reducer,initialArg, init)