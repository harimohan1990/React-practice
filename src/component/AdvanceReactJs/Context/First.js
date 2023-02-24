import React from 'react'
import { userContext } from "./createContext";
import Second from './Second'
import Third from './Third';


  export const mainStyle = {
    backgroundColor: "#4E9F3D",
    padding: "10px",
    borderRadius: "10px",
    boxShadow:
      "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
    width: "200px",
    margin: "auto",
  };

function First() {

    
let data = {
    theme: "light",
    name: "Aman",
    userId: "aox01",
    email: "aman1@gmail.com",
    contactNumber: "+91 9898987231",
    noOfQuestionsSolved: 120,
    codingStreak: 30,
  };

  return (
    

<userContext.Provider value={data}>
<div className="App">
  <Third/>
</div>
</userContext.Provider>
    
  )
}

export default First