import React, { useContext } from "react";
import { userContext } from "./createContext";

function Second() {
    const { name,userId } = useContext(userContext);
    return (
      <div>
        <div >
          <h3>Geek hari {name} {userId}</h3>
        </div>
      </div>
    );
}

export default Second