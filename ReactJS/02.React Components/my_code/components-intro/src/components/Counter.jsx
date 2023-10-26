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
    // set absolute value to the counter not relative to some other value
    setCount(0);
  };
  //* conditionally render the button using return
  //   if (count < 0) {
  //     return <h3>Invalid count!</h3>;
  //   }
  //   * conditionally render the button using if statement
  //   let warning = null;
  //   if (count < 0) {
  //     warning = <p>Value can't be negative number!</p>;
  //   }
  let message = null;
  switch (count) {
    case 0:
      message = "Zero";
      break;
    case 1:
      message = "One";
      break;
    case 2:
      message = "Two";
      break;
    case 3:
      message = "Three";
      break;
    case 4:
      message = "Four";
      break;
    case 5:
      message = "Five";
      break;

    default:
      message = "More than five.";
      break;
  }
  return (
    <div>
      <h3>Counter</h3>
      <h4>{message}</h4>
      {/* {warning} */}
      {/* using ternary operator to conditionally render */}
      {count < 0 ? <p>Value can't be negative number!</p> : null}
      {/* using boolean to conditionally render */}
      {count == 0 && <p>Value should be incremented!</p>}
      <p>Count: {count}</p>
      <button disabled={count < 0} onClick={decrementCounterHandler}>
        -
      </button>
      <button onClick={clearCounter}>clear</button>
      <button onClick={incrementCounterHandler}>+</button>
    </div>
  );
}
