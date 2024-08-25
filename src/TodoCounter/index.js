// import "./TodoCounter.css";
// function TodoCounter({ total, completed }) {
//   return (
//     <h1 className="CounterText">
//       Hay completados <span>{completed}</span> de <span>{total}</span>{" "}
//       pendientes
//     </h1>
//   );
// }

// export { TodoCounter };
import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);
  return (
    <h1 className="CounterText">
      {totalTodos === 0 ? (
        "Sin pendientes, ponganse a barrer o limpiar :)"
      ) : completedTodos === totalTodos ? (
        "Pendientes completados :) vamonos al mandado"
      ) : (
        <>
          Hay completados <span>{completedTodos}</span> de{" "}
          <span>{totalTodos}</span> pendientes
        </>
      )}
    </h1>
  );
}

export { TodoCounter };
