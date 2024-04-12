import React, { useState } from "react";
import Button from "./Button";
import useCounter from "./useCounter";
import "../components/Counter.css";

const STEP = 3;
const MAX = 20;
const initialState = 3;
const colorAbove = "green";
const colorBellow = "red";

const Counter = () => {
  const { count, increment, decrement, textColor } = useCounter({
    STEP,
    MAX,
    initialState,
    colorAbove,
    colorBellow,
  });

  return (
    <div className="counter-container">
      <Button onClick={increment} className={"add"}>
        +
      </Button>
      <div style={{ color: textColor, fontSize: "36px" }}>{count}</div>
      <Button onClick={decrement} className={"subtrac"}>
        -
      </Button>
    </div>
  );
};

export default Counter;
