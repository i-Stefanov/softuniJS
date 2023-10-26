import { useState } from "react";
export default function Counter(props) {
  const [count, setCount] = useState(0);
  const incrementCounterHandler = () => {
    setCount((count) => count + 1);
  };
  const decrementCounterHandler = () => {
    setCount((count) => count - 1);
  };
  const clearCounter = (event) => {
    console.log(event.target);
    // set absolute value to the counter not relative to some other value
    setCount(0);
  };
  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={decrementCounterHandler}>-</button>
      <button onClick={clearCounter}>clear</button>
      <button onClick={incrementCounterHandler}>+</button>
    </div>
  );
}
