import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import {
  FaCalendarAlt,
  FaWhatsapp,
  FaPrint,
  FaTasks,
  FaDollarSign,
  FaEdit,
} from "react-icons/fa"; // Importa los íconos que necesitas

import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  const calculateTimeRemaining = (dueDate) => {
    const now = new Date();
    const due = new Date(dueDate);
    const timeDiff = due - now;

    if (timeDiff <= 0) {
      return "El tiempo ha expirado";
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return `Faltan ${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos para la entrega.`;
  };

  // Calcula el tiempo restante para la fecha de entrega del TODO
  const timeRemaining = props.dueDate
    ? calculateTimeRemaining(props.dueDate)
    : "";

  return (
    <div className="TodoItem-container">
      <div className="div_superior">
        <DeleteIcon onDelete={props.onDelete} />
      </div>
      <li className="TodoItem-list">
        <div className="TodoItem-titulo">
          <FaWhatsapp className="TodoItem-icon" />
          <p className={"subtitulo2"}>
            <span className="">Cliente: </span>
            {props.text}
          </p>
        </div>
        {props.dueDate && (
          <div className="TodoItem-dueDateContainer">
            <FaCalendarAlt className="TodoItem-icon" />
            <p className="parrafo">
              <span className="subtitulo">
                Fecha de entrega: <span />
              </span>
              {new Date(props.dueDate).toLocaleString()}{" "}
            </p>

            <p className=""> </p>
          </div>
        )}
        {props.printType && props.sides && props.acabado && (
          <div className="TodoItem-dueDateContainer">
            <FaPrint className="TodoItem-icon" />
            <p className="">
              <span className="subtitulo">Detalles de impresión: </span>
              {props.printType}, {props.sides}, {props.acabado}{" "}
            </p>
          </div>
        )}
        {props.total && (
          <div className="TodoItem-dueDateContainer">
            <p className="">
              <FaDollarSign className="TodoItem-icon" />
              <span className="subtitulo">Total:</span>
              <span>
                {" "}
                {props.total} | <span className="subtitulo">Anticipo: </span>$
                {props.anticipo} | <span className="subtitulo"> Resta: </span>$
                {props.resta}
              </span>
            </p>
            <p></p>
          </div>
        )}
        {props.description && (
          <div className="TodoItem-dueDateContainer">
            <p className="">
              <FaTasks className="TodoItem-icon" />
              <span className="subtitulo">
                Total de juegos y notas adicionales
              </span>
              <span className="texto_normal"> {props.description}</span>
            </p>
          </div>
        )}
        <p className="parrafo">{timeRemaining}</p>{" "}
        {/* Muestra el tiempo restante */}
        <div className="editar">
          <button
            className="edit-button"
            onClick={() => props.onEdit(props.id)}
          >
            <FaEdit />
            Editar
          </button>
        </div>
      </li>
      <div className="div_inferior">
        {" "}
        <div className="TodoItem-titulo">
          <CompleteIcon
            status={props.status}
            onStatusChange={props.onStatusChange}
          />
        </div>
      </div>
    </div>
  );
}
export { TodoItem };
