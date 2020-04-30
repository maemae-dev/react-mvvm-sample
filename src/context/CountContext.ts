import { createContext } from "react";

export type ICountViewModel = {
  count: number;
  increment: () => void;
};

export const CountContext = createContext<ICountViewModel>({
  count: 0,
  increment: () => {},
});
