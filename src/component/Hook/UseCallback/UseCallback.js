// This allows us to isolate resource intensive functions so that they will not automatically run on every render.

// The useCallback Hook only runs when one of its dependencies update.

// This can improve performance.

//The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.

//Syntax:

// const memoizedCallback = useCallback(
//  () => {
//    doSomething(a, b);
//  },
//  [a, b],
// );

import  React, { useState, useCallback } from 'react'

 const funccount = new Set();

function UseCallback() {
     
      const [count, setCount] = useState(0)
      const [number, setNumber] = useState(0)
     
      const incrementCounter = () => {
        setCount(count + 1)
      }
      const decrementCounter = () => {
        setCount(count - 1)
      }
       
       const incrementNumber = () => {
        setNumber(number + 1)
      }
       
    funccount.add(incrementCounter);
    funccount.add(decrementCounter);
    funccount.add(incrementNumber);
    alert(funccount.size);
     
      return (
        <div>
          Count: {count}
          <button onClick={incrementCounter}>
            Increase counter
          </button>
          <button onClick={decrementCounter}>
             Decrease Counter
          </button>
          <button onClick={incrementNumber}>
            increase number
          </button>
        </div>
      )
}

export default UseCallback;



// import React, { useState, useCallback } from 'react'
// var funccount = new Set();
// const App = () => {


// const [count, setCount] = useState(0)
// const [number, setNumber] = useState(0)

// const incrementCounter = useCallback(() => {
// setCount(count + 1)
// }, [count])
// const decrementCounter = useCallback(() => {
// setCount(count - 1)
// }, [count])
// const incrementNumber = useCallback(() => {
// setNumber(number + 1)
// }, [number])

// funccount.add(incrementCounter);
// funccount.add(decrementCounter);
// funccount.add(incrementNumber);
// alert(funccount.size);

// return (
// 	<div>
// 	Count: {count}
// 	<button onClick={incrementCounter}>
// 		Increase counter
// 	</button>
// 	<button onClick={decrementCounter}>
// 		Decrease Counter
// 	</button>
// 	<button onClick={incrementNumber}>
// 		increase number
// 	</button>
// 	</div>
// )
// }


// export default App;

