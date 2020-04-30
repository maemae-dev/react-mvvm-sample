import { ICountViewModel } from "../context/CountContext";
import { useState } from "react";

export const CountStore = (): ICountViewModel => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  };

  return { count, increment };
};
