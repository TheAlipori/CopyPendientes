import React from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";
function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  return (
    <div>
      <input
        type="text"
        placeholder="Buscar pendiente"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      ></input>
    </div>
  );
}

export { TodoSearch };
