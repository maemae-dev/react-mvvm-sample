import React from "react";
import { CountViewModel } from "./viewModel/CountViewModel";
import { CountContext } from "./context/CountContext";
import { Label } from "./Label";
import { Button } from "./Button";

function App() {
  const store = CountViewModel();
  return (
    <div className="App">
      <CountContext.Provider value={store}>
        <Label />
        <Button />
      </CountContext.Provider>
    </div>
  );
}

export default App;
