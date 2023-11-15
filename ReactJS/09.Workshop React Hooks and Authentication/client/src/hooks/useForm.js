import { useState } from "react";

export const useForm = (initialValues, onSubmitHandler) => {
  const [values, setValues] = useState(initialValues);
  const changeHandler = (e) => {
    // create new reference by using the spread operator (...state) and replace the value of the key that matches the target name with the value from the input
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("SubmitHandler call");
    onSubmitHandler(values);
  };
  return {
    values,
    changeHandler,
    onSubmit,
  };
};
