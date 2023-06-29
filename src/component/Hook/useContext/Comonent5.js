import React,{useState} from "react";


import Component2 from './Component2'

const JediContext = React.createContext();
export default function Comonent5() {
    const [user, setUser] = useState("Jesse Hall");
  return (
    
    <JediContext.Provider value={user}>
      <Component2 />
    </JediContext.Provider>
  )
}
