import React, { useEffect, forwardRef, useImperativeHandle } from "react";
import { useSelector, useDispatch } from "react-redux";

import { updateInputValue } from "./store/actions";

const Hello = (_, ref) => {
  const value = useSelector((state) => state.inputState.value);
  const dispatch = useDispatch();

  const resetInput = () => {
    setName("");
  }

  useEffect(() => {
    console.log("aqui dentro", value);
  }, [value]);

  const handleChange = (event) => {
    const { value } = event.target;
    dispatch(updateInputValue(value));
  }

  useImperativeHandle(ref, () => ({resetInput}))

  return <div>
    <h2>App2</h2>
    <p>Hello {value}</p>
    <input onChange={handleChange} value={value} />
  </div>
}

export default forwardRef(Hello);