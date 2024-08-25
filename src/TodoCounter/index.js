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
import "./TodoCounter.css";

function TodoCounter({ total, completed }) {
  return (
    <h1 className="CounterText">
      {total === 0 ? (
        "Sin pendientes, ponganse a barrer o limpiar :)"
      ) : completed === total ? (
        "Pendientes completados :) vamonos al mandado"
      ) : (
        <>
          Hay completados <span>{completed}</span> de <span>{total}</span>{" "}
          pendientes
        </>
      )}
    </h1>
  );
}

export { TodoCounter };
