
import React,{useState} from 'react'

import Counter from './component/LiftingUpState/Counter'
function App() {
  const [counter, SetCounter] = useState(0)

  const increment =()=>{
    SetCounter(counter +1)
  }

  const decrement =()=>{
    SetCounter(counter -1)
  }
  return (
    <div className="App">
      <Counter counter={counter} increment={increment} decrement={decrement} />
    </div>
  );
}

export default App;
