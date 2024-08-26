import React from "react";
import "./TodoForm.css";
import { TodoContext } from "../TodoContext";
function TodoForm() {
  const { setOpenModal, addTodo } = React.useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = React.useState("");
  const [dueDate, setDueDate] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [printType, setPrintType] = React.useState(""); // Nuevo estado para el combobox

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue, dueDate, description, printType);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onChangeText = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onChangeDate = (event) => {
    setDueDate(event.target.value);
  };
  const onChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe el numero de contacto</label>
      <input
        value={newTodoValue}
        onChange={onChange}
        required
        placeholder="6183006203"
      />
      <label>Notas adicionales</label>
      <textarea
        value={description}
        onChange={onChangeDescription}
        placeholder="Descripción del trabajo"
      />
      <label>Fecha de entrega</label>
      <input
        type="datetime-local"
        value={dueDate}
        onChange={onChangeDate}
        required
      />
      <label>Tipo de impresión</label>
      <select value={printType} onChange={(e) => setPrintType(e.target.value)}>
        <option value="">Selecciona una opción</option>
        <option value="Color">Color</option>
        <option value="Inyeccion de tinta">Inyección de tinta</option>
        <option value="Escala de grises">Escala de grises</option>
      </select>

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
