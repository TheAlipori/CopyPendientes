import React from "react";
import "./TodoForm.css";
import { TodoContext } from "../TodoContext";
function TodoForm() {
  const { setOpenModal, addTodo } = React.useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = React.useState("");
  const [dueDate, setDueDate] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [printType, setPrintType] = React.useState(""); // Nuevo estado para el combobox
  const [sides, setSides] = React.useState("");
  const [acabado, setAcabado] = React.useState("");
  const [total, setTotal] = React.useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue, dueDate, description, printType, sides, acabado);
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
      <label>Detalles de impresion</label>
      <div className="selectores">
        <select
          value={printType}
          onChange={(e) => setPrintType(e.target.value)}
        >
          <option value="">Selecciona una opción</option>
          <option value="Color">Color</option>
          <option value="Inyeccion de tinta">Inyección de tinta</option>
          <option value="Escala de grises">Escala de grises</option>
        </select>

        <select value={sides} onChange={(e) => setSides(e.target.value)}>
          <option value="">Selecciona una opción</option>
          <option value="x1 lado">x1 lado</option>
          <option value="x2 lados">x2 lados</option>
        </select>
        {/* acabado combobox */}
        <select value={acabado} onChange={(e) => setAcabado(e.target.value)}>
          <option value="">Selecciona una opción</option>
          <option value="x1 lado">Grapado</option>
          <option value="x2 lados">Engargolado</option>
        </select>
      </div>
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
