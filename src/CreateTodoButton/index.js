import React from "react";
import "./CreateTodoButton.css";
function CreateTodoButton() {
  return (
    <div className="centered-button">
      <button
        className="CreateTodoButton"
        onClick={(event) => {
          console.log("Le diste click");
        }}
      >
        ✚
      </button>
    </div>
  );
}

export { CreateTodoButton };
