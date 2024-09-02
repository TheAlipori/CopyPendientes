import React from "react";
import "./TodoForm.css";
import { useEffect } from "react";
import { TodoContext } from "../TodoContext";
function TodoForm() {
  const { setOpenModal, addTodo, editTodo, todoToEdit, closeModal } =
    React.useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = React.useState("");
  const [dueDate, setDueDate] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [printType, setPrintType] = React.useState(""); // Nuevo estado para el combobox
  const [sides, setSides] = React.useState("");
  const [acabado, setAcabado] = React.useState("");
  const [total, setTotal] = React.useState("");
  const [anticipo, setAnticipo] = React.useState(""); // Estado para el anticipo
  const [resta, setResta] = React.useState(""); // Estado para la cantidad restante
  const onSubmit = (event) => {
    if (todoToEdit) {
      // Si existe un TODO a editar, llama a la función de editar
      editTodo({
        ...todoToEdit,
        text: newTodoValue,
        dueDate,
        description,
        printType,
        sides,
        acabado,
        total,
        anticipo,
        resta,
      });
    } else {
      // Si no hay TODO a editar, crea uno nuevo
      addTodo(
        newTodoValue,
        dueDate,
        description,
        printType,
        sides,
        acabado,
        total,
        anticipo,
        resta
      );
    }

    closeModal();
  };
  useEffect(() => {
    if (todoToEdit) {
      setNewTodoValue(todoToEdit.text);
      setDueDate(todoToEdit.dueDate);
      setDescription(todoToEdit.description);
      setPrintType(todoToEdit.printType);
      setSides(todoToEdit.sides);
      setAcabado(todoToEdit.acabado);
      setTotal(todoToEdit.total);
      setAnticipo(todoToEdit.anticipo);
      setResta(todoToEdit.resta);
    }
  }, [todoToEdit]);
  const onCancel = () => {
    setOpenModal(false);
    closeModal();
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
  const onChangeTotal = (event) => {
    const totalValue = parseFloat(event.target.value) || 0;
    setTotal(totalValue);
    setResta(totalValue - (parseFloat(anticipo) || 0));
  };
  const onChangeAnticipo = (event) => {
    const anticipoValue = parseFloat(event.target.value) || 0;
    setAnticipo(anticipoValue);
    setResta((parseFloat(total) || 0) - anticipoValue);
  };

  // Maneja el envío del formulario

  return (
    <form onSubmit={onSubmit}>
      {/* Los campos del formulario permanecen igual */}
      <label>Escribe el número de contacto</label>
      <input
        value={newTodoValue}
        onChange={(e) => setNewTodoValue(e.target.value)}
        required
        placeholder="6183006203"
      />

      <label>Fecha de entrega</label>
      <input
        type="datetime-local"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />
      <label>Detalles de impresión</label>
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

        <select value={acabado} onChange={(e) => setAcabado(e.target.value)}>
          <option value="">Selecciona una opción</option>
          <option value="Grapado">Grapado</option>
          <option value="Engargolado">Engargolado</option>
        </select>
      </div>
      <label>Total de juegos y notas adicionales</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descripción del trabajo"
      />
      <div className="cantidades">
        <div>
          <label>Total del pedido: </label>
          <input
            className="inputstyle"
            type="number"
            value={total}
            onChange={onChangeTotal}
            placeholder="Total del pedido"
            min="0"
          />
        </div>
        <div>
          <label>Anticipo: </label>
          <input
            className="inputstyle"
            type="number"
            value={anticipo}
            onChange={onChangeAnticipo}
            placeholder="Anticipo"
            min="0"
          />
        </div>
        <div>
          <label>Cantidad restante: </label>
          <input
            className="inputstyle"
            type="number"
            value={resta}
            readOnly
            placeholder="Resta"
          />
        </div>
      </div>
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button--add">
          {todoToEdit ? "Guardar cambios" : "Agregar"}
        </button>
      </div>
    </form>
  );
}
export { TodoForm };
