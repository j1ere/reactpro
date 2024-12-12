import { useState } from "react";

// state
export default function Counter() {
  // defining the state variable and the function that manipulates the state variable
  // useState() is a hook which allows us to create a state variable 'count'
  // at it also allows us to create a function which will set the value of count
  // so that means whenever i have to change the value of count i can only do it
  // through the help of setCount
  const [count, setCount] = useState(0);
  function handleIncrement() {
    setCount(count + 1);
  }
  function handleDecrement() {
    setCount(count - 1);
  }
  return (
    <div>
      <h3>Count value is: {count}</h3>
      <button onClick={handleIncrement}>increment</button>{" "}
      <button onClick={handleDecrement}>decrement</button>
    </div>
  );
}
