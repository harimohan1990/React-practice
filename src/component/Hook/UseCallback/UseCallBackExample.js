import React,{useState,useCallback}from 'react';

import Todos from './Todos'
export default function UseCallBackExample() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
  
    const increment = () => {
      setCount((c) => c + 1);
    };
    const addTodo = useCallback(() => {
      setTodos((t) => [...t, "New Todo"]);
    }, [todos]);
  
    return (
      <>
        <Todos todos={todos} addTodo={addTodo} />
        <hr />
        <div>
          Count: {count}
          <button onClick={increment}>+</button>
        </div>
      </>
    );
}


//The react useCallback hook return a memoized callback function 

// this allows us to isolate resource intensive functop

// the main difference is that useMemo return a memoized value and usecallback returns a memoized function.

