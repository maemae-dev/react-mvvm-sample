import React, { useContext } from "react";
import { CountContext } from "./context/CountContext";

export const Button = () => {
  const viewModel = useContext(CountContext);
  return <button onClick={viewModel.increment}>increment</button>;
};
