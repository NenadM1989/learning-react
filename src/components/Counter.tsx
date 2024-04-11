import React, { useState } from "react";
import Button from "./Button";
import useCounter from "./useCounter";
import '../components/Counter.css'

const STEP = 3;
const MAX = 20;

const Counter = () => {
  const { count, increment, decrement, textColor } = useCounter({
    STEP,
    MAX,
  });

  return (
    <div className="counter-container">
      <Button onClick={increment} className={'add'}>+</Button>
      <div style={{ color: textColor }}>{count}</div>
      <Button onClick={decrement} className={'subtrac'}>-</Button>
    </div>
  );
};

export default Counter;
