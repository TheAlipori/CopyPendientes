import React from "react";
import "./TodoForm.css";
import { TodoContext } from "../TodoContext";
function TodoForm() {
  const { setOpenModal, addTodo } = React.useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe el nuevo pendiente</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        required
        placeholder="Ir al mandado"
      />

      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button type="" className="TodoForm-button--add">
          Agregar
        </button>
      </div>
    </form>
  );
}
export { TodoForm };
