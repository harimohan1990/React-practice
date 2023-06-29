import { useState, createContext, useContext } from "react";

import {JediContext} from './Comonent5.js'

export default function Component2() {
    const value = useContext(JediContext);

  return (
    <div>
       hfdshf {value}
    </div>
  )
}
