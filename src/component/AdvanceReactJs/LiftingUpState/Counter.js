
import React from 'react'

function Counter(props) {
  return (
    <div>Counter
      <p>{props.counter}</p>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
    </div>
  )
}

export default Counter