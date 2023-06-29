import React,{useEffect,useState} from 'react'
import { useLayoutEffect } from 'react'
import UseLayoutEffect from './UseLayoutEffect'
import UseLayoutEffect2 from './UseLayoutEffect2'

function Index() {
    const [count, setCount] = useState(0)
    useLayoutEffect(() => {
      // perform side effect
      setCount(count)
    }, [count])

    // useEffect(() => {
    //   // perform side effect
    //   setCount(count)
    //   console.log("Hello render1 ")
    // }, [count])

   
  return (
    <div>
       {/* <h1> {`The current count is ${count}`} </h1>
    <button onClick={() => setCount(count => count + 1)}>
        Update Count
    </button> */}
    <hr/>
    <UseLayoutEffect/>
    <hr/>
    <UseLayoutEffect2/>
    </div>
   
  )
}

export default Index