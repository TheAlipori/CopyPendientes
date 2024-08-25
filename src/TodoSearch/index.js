import React from "react";
import "./TodoSearch.css";
function TodoSearch({ searchValue, setSearchValue }) {
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
