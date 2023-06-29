import React,{useState, useLayoutEffect,useEffect}from 'react'

function UseLayoutEffect2() {
    const [value , setvalue] = useState(0);

    useLayoutEffect(()=>{
        if(value===0){
            setvalue(10+Math.random()+2000);
        }
    },[])

    console.log("render", value)
  return (
    <button onClick={()=>{setvalue(0)}} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>Randon number:{value}</button>

  )
}

export default UseLayoutEffect2