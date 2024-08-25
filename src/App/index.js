import { AppUI } from "./AppUI";
import React from "react";
import { useLocalStorage } from "../TodoContext/useLocalStorage";
import { TodoProvider } from "../TodoContext";

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
