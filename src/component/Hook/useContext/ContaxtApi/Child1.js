import React, { useContext } from "react";
import { ColorContext } from "./ContextApi";

export default function Child1() {
    
    const { color, setColor } = useContext(ColorContext);

  return (
    <button className="button" onClick={() => setColor("blue")}>
    Parent color:
    <span className={color === "burlywood" ? "burlywood" : "blue"}>
      {color}
    </span>
  </button>
  )
}
