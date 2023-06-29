import React,{useState}from 'react'

export default function ExampleCounterUseState() {

    const [count, setCount] = useState(0);

  return (
    <>
    Count:{count};
    <button onClick={()=>{setCount(count)}}>Reset</button>
    <button onClick={()=>{setCount(prevCount=>prevCount-1)}}>-</button>
    <button onClick={()=>{setCount(prevCount=>prevCount+1)}}>+</button>
    </>
  )
}
