import React, { useState } from "react";
import Button from "./Button";
import useCounter from "./useCounter";

const STEP = 7;
const MAX = 20;

const Counter = () => {
  const { count, increment, decrement, textColor } = useCounter({
    STEP,
    MAX,
  });

  return (
    <div>
      <Button onClick={increment}>+</Button>
      <div style={{ color: textColor }}>{count}</div>
      <Button onClick={decrement}>-</Button>
    </div>
  );
};

export default Counter;
