import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import {
  FaCalendarAlt,
  FaClock,
  FaPhone,
  FaWhatsapp,
  FaPrint,
} from "react-icons/fa"; // Importa los íconos que necesitas

import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="TodoItem-container">
      <DeleteIcon onDelete={props.onDelete} />
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        <FaWhatsapp className="TodoItem-icon" /> # de contacto: {props.text}
      </p>

      {props.dueDate && (
        <div className="TodoItem-dueDateContainer">
          <FaCalendarAlt className="TodoItem-icon" />
          <p className="">
            Fecha de entrega: {new Date(props.dueDate).toLocaleString()}
          </p>
        </div>
      )}
      {props.description && (
        <p className="">Notas adicionales: {props.description}</p>
      )}
      {props.printType && (
        <p className="">
          <FaPrint className="TodoItem-icon" />
          Tipo de impresión: {props.printType}
        </p>
      )}
      <CompleteIcon completed={props.completed} onComplete={props.onComplete} />
    </li>
  );
}
export { TodoItem };
