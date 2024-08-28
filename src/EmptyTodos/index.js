import React from "react";
import "./EmptyTodos.css";
function EmptyTodos() {
  return (
    <div className="empty-container">
      <h2 className="empty-message">Crear tu primer pedido</h2>
      <p className="empty-instruction">Haz clic en el botón para empezar</p>
    </div>
  );
}

export { EmptyTodos };
