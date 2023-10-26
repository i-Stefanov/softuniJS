// import the hook (function) useState
import { useState } from "react";
export default function Timer(props) {
  // initially the value of time is 'undefined' so it has to be set by passing a paramenter in the useState function which is the default (initial state) value of the time variable
  const [time, setTime] = useState(props.startTime);

  //* Note: Don't use setTimeout, useEffect is more appropriate for this purpose
  setTimeout(() => {
    setTime(time + 1);
  }, 1000);

  return (
    <div>
      <h3>Timer</h3>
      <p>{time}</p>
    </div>
  );
}

//* hookResult is an array conatining two elements
//   const hookResult = useState();
//* the value of the state is the first element in the hooResult array
//   const stateValue = hookResult[0];
//* setState is a function used to change te state value
//   const setState = hookResult[1];
