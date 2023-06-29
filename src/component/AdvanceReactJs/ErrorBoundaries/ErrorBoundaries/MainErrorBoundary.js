import React from 'react'
export default function MainErrorBoundary() {

  const error =()=>{
    if(true){
      throw new Error
    }
    else {
    console.log("helllo")
    }
  }


  return (
   <>
   {error()}
   </>
  )
}
