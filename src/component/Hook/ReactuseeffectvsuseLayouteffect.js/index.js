import React,{useEffect,useState} from 'react'
import { useLayoutEffect } from 'react'

function Index() {

    const [count, setCount] = useState(0)

    useLayoutEffect(() => {
      // perform side effect
      setCount(count)
    }, [count])
   
  return (
    <div>
       <h1> {`The current count is ${count}`} </h1>
    <button onClick={() => setCount(count => count + 1)}>
        Update Count
    </button>
    </div>
   
  )
}

export default Index