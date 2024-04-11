import React, { useState } from "react";

interface UseCounterProps {
  STEP: number;
  MAX: number;
}

const useCounter = ({ STEP, MAX }: UseCounterProps) => {
  const [count, setCount] = useState(0);

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
  return { increment, decrement, count, textColor };
};

export default useCounter;
