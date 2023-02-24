//The React useState Hook allows us to track state in a function component.

// The current state.
// A function that updates the state.

import { useState } from "react";

function UseState() {

    const [car, setCar] = useState(
      {
      brand: "Ford",
      model: "Mustang",
      year: "1964",
      price:"1000",
      color: "red" // ==>blue
    });


    const updateColor = () => {
      setCar(previousState => {
        return { ...previousState, color: "blue", }
      });
    }
  
    return (
      <>
        <h1>My {car.brand}</h1>
        <p>
          It is a {car.color} {car.model} from {car.year}.
        </p>
        <button
          type="button"
          onClick={updateColor}
        >Press me to change color</button>
      </>
    )
  }
  
  export default UseState