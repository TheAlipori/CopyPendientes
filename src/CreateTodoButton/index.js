import React, { useContext } from "react";
import "./CreateTodoButton.css";
import { TodoContext } from "../TodoContext";
function CreateTodoButton() {
  const { setOpenModal } = useContext(TodoContext);
  return (
    <div className="centered-button">
      <button
        className="CreateTodoButton"
        onClick={(event) => {
          setOpenModal((value) => !value);
        }}
      >
        ✚
      </button>
    </div>
  );
}

export { CreateTodoButton };
