import React from "react";
import { TodoIcon } from "./";

function CompleteIcon({ status, onStatusChange }) {
  // Define los colores y los textos para cada estado
  const statusInfo = {
    incomplete: { color: "red", text: "No completado" },
    inProgress: { color: "orange", text: "En progreso" },
    completed: { color: "#0078D7", text: "Completado" },
  };

  // Maneja el clic para cambiar el estado
  const handleClick = () => {
    let newStatus;
    switch (status) {
      case "completed":
        newStatus = "inProgress";
        break;
      case "inProgress":
        newStatus = "incomplete";
        break;
      default:
        newStatus = "completed";
        break;
    }
    onStatusChange(newStatus);
  };

  // Obtén el color y el texto según el estado actual
  const { color, text } = statusInfo[status] || {
    color: "gray",
    text: "Desconocido",
  };

  return (
    <div
      onClick={handleClick}
      style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
    >
      <TodoIcon type="check" color={color} />
      <span style={{ marginLeft: "8px", color }}>{text}</span>
    </div>
  );
}

export { CompleteIcon };
