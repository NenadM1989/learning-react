import React, { useState } from "react";

const STEP = 7;
const MAX = 20;

const Counter = () => {
  const [count, setCount] = useState(13);

  const increment = () => {
    if (count + STEP > MAX) {
      return;
    }
    setCount((prevCount) => prevCount + STEP);
  };

  const decrement = () => {
    if (count - STEP < 0) {
      return;
    }
    setCount((prevCount) => prevCount - STEP);
  };

  const textColor = count <= MAX / 2 ? "red" : "green";
  return (
    <div>
      <button onClick={increment}>+</button>
      <div style={{ color: textColor }}>{count}</div>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;
