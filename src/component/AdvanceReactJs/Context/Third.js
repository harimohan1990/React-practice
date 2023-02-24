import React, { useContext } from "react";
import { userContext } from "./createContext";

function Third() {
    const { contactNumber } = useContext(userContext);
  return (
    <div>Third number {contactNumber}</div>
  )
}

export default Third