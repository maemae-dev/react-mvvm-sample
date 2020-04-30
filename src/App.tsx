import React from "react";
import { CountStore } from "./store/CountStore";
import { CountContext } from "./context/CountContext";
import { Label } from "./Label";
import { Button } from "./Button";

function App() {
  const store = CountStore();
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
