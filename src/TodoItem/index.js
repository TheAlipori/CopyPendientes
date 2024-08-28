import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import {
  FaCalendarAlt,
  FaClock,
  FaPhone,
  FaWhatsapp,
  FaPrint,
  FaTasks,
} from "react-icons/fa"; // Importa los íconos que necesitas

import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="TodoItem-container">
      <DeleteIcon onDelete={props.onDelete} />
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        <FaWhatsapp className="TodoItem-icon" /> {props.text}
      </p>

      {props.dueDate && (
        <div className="TodoItem-dueDateContainer">
          <FaCalendarAlt className="TodoItem-icon" />
          <p className="">
            Fecha de entrega: {new Date(props.dueDate).toLocaleString()}
          </p>
        </div>
      )}

      {props.printType && props.sides && (
        <div className="TodoItem-dueDateContainer">
          <FaPrint className="TodoItem-icon" />
          <p className="">
            Detalles de impresión: {props.printType} | {props.sides}
          </p>
        </div>
      )}

      {props.description && (
        <div className="TodoItem-dueDateContainer">
          <FaTasks className="TodoItem-icon" />
          <p className="">Notas adicionales: {props.description}</p>
        </div>
      )}

      <CompleteIcon completed={props.completed} onComplete={props.onComplete} />
    </li>
  );
}
export { TodoItem };
