import { useState } from "react";
export const useLocalStorage = (key, initialValue) => {
  // Passing a function as initial value to the state.That function gets the user data (in this case) from the localStorage and sets it as initial state.
  const [state, setState] = useState(() => {
    const persistedStateSerialized = localStorage.getItem(key);
    if (persistedStateSerialized) {
      const persistedState = JSON.parse(persistedStateSerialized);
      return persistedState;
    }
    return initialValue;
  });
  const setLocalStorageState = (value) => {
    // set the value in the state
    setState(value);
    // set the same value in the local storage
    localStorage.setItem(key, JSON.stringify(value));
  };
  return [state, setLocalStorageState];
};
