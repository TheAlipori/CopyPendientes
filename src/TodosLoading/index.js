import React from "react";
import "./TodosLoading.css";
function TodosLoading() {
  return (
    <li className="TodoItem loading">
      <div className="CompleteIcon skeleton"></div>

      <p className="TodoItem-p skeleton-text"></p>

      <div className="DeleteIcon skeleton"></div>
    </li>
  );
}

export { TodosLoading };
