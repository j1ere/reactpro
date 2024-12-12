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
    setCount(count + value);
  }
  function handleDecrement() {
    setCount(count - value);
  }

  const [value, incrementValue] = useState(1);

  function increaseIncrementValue() {
    incrementValue(value + 1);
  }

  function decreaseIncrementValue() {
    incrementValue(value - 1);
  }
  return (
    <div>
      <h3>Count value is: {count}</h3>
      <button onClick={handleIncrement}>increment</button>{" "}
      <button onClick={handleDecrement}>decrement</button>
      <br />
      <br />
      <h2>we are inceamenting the value by:{value}</h2>
      <button onClick={increaseIncrementValue}>Increase Value</button>{" "}
      <button onClick={decreaseIncrementValue}>decrease value</button>
    </div>
  );
}
