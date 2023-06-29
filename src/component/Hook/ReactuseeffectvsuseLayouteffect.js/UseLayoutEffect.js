import React,{useLayoutEffect,useState,useEffect}from 'react'

export default function UseLayoutEffect() {
    const [value, setValue] =useState('GFG');

    useLayoutEffect(()=>{
        if(value==="GFG"){
            setValue("Geeksforgeeks")
        }
        console.log("UseLayoutEffect is called with the value of ",value);
    },[])
    useEffect(()=>{
        if(value==="GFG"){
            setValue("Geeksforgeeks")
        }
        console.log("UseEffect",value);
    },[])
  return (
    <div>{value}  </div>
  )
}
