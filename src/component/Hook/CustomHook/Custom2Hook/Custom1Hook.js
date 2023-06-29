import React,{useState,useEffect,} from 'react';

import  useDocument from './UseDocument'

function Custom1Hook() {
    const [count, setCount] = useState(0);
    useDocument(count)
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Count -{count}</button>
    </div>
  )
}

export default Custom1Hook