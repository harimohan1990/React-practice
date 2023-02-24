import { useState, useEffect } from "react";

function UseEffect({change}) {
    const [count, setCount] = useState(0);
    const [counter, setCounter] = useState(0);

   
    

    useEffect(() => {
   

//         1. No dependency passed:
// useEffect(() => {
//   //Runs on every render
// });


// 2. An empty array:
// useEffect(() => {
//   //Runs only on the first render
// }, []);

// 3. Props or state values:
// useEffect(() => {
//   //Runs on the first render
//   //And any time any dependency value changes
// }, [prop, state])

// Effect Cleanup

// useEffect(() => {
//     let timer = setTimeout(() => {
//     setCount((count) => count + 1);
//   }, 1000);

//   return () => clearTimeout(timer)
//   }, []);

//   return <h1>I've rendered {count} times!</h1>;

      setTimeout(() => {
                             
        setCount((count) => count + 1);
        
      }, 1000);
    },[]);
  
    return <h1>I've rendered {count} times!</h1>;
  }

  export default UseEffect