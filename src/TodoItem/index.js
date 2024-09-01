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
  return (
    <div className="TodoItem-container">
      <li className="TodoItem-list">
        <DeleteIcon onDelete={props.onDelete} />

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
              <span className="subtitulo">Notas adicionales:</span>
              <span className="texto_normal"> {props.description}</span>
            </p>
          </div>
        )}

        <div className="TodoItem-titulo">
          <CompleteIcon
            completed={props.completed}
            onComplete={props.onComplete}
          />
          <FaEdit />
        </div>
      </li>
    </div>
  );
}
export { TodoItem };
