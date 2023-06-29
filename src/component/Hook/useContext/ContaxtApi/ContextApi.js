import React, { createContext, useState } from "react";

import Child1 from './Child1'
export const ColorContext = createContext();

export default function ContextApi() {
    const [color, setColor] = useState("burlywood");
  return (
    <ColorContext.Provider value={{ color, setColor }}>
       <div className={color === "burlywood" ? "App" : "Blue"}>
        
        <Child1 color={color} />
      </div>
    </ColorContext.Provider>
  )
}
