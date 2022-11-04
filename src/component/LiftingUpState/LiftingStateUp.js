import React,{useState} from 'react'

import Counter from './Counter'
function LiftingStateUp() {

const [counter, SetCounter] = useState(0)

  const increment =()=>{
    SetCounter(counter +1)
  }

  const decrement =()=>{
    SetCounter(counter -1)
  }
  
  return (
    <Counter counter={counter} increment={increment} decrement={decrement} />
  )
}

export default LiftingStateUp