import React, { useContext } from "react";
import { CountContext } from "./context/CountContext";

export const Label = () => {
  const viewModel = useContext(CountContext);
  return <div>{viewModel.count}</div>;
};
