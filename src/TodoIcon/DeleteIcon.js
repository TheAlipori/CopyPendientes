import React from "react";
import { TodoIcon } from "./";
import { TiDelete } from "react-icons/ti";
function DeleteIcon({ onDelete }) {
  return <TodoIcon type="delete" color="grey" onClick={onDelete} />;
}

export { DeleteIcon };
