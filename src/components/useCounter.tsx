import React, { useState } from "react";

interface UseCounterProps {
  STEP: number;
  MAX: number;
  initialState: number;
  colorAbove: string;
  colorBellow: string;
}

const useCounter = ({ STEP, MAX, initialState, colorAbove,colorBellow }: UseCounterProps) => {
  const [count, setCount] = useState(initialState);

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

  const textColor = count <= MAX / 2 ? colorBellow : colorAbove;
  return { increment, decrement, count, textColor };
};

export default useCounter;
