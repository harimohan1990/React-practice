 import React,{useState} from 'react'
import Wrapper from './Wrapper';

import Wrapper2 from './Wrapper2'
 
 export default function Main() {
    const [count, setCount] = useState(0);

    const setCounter =()=>{
         setCount(count+1)
     }
   return (
     <div>
        <Wrapper  render={()=>{
            return (
                <>
                <h1>Hello</h1>
                <Wrapper2   count = {count}  />
                </>
                
            )

        }}/>
     </div>
   )
 }
 