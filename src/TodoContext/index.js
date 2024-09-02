import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  const [todoToEdit, setTodoToEdit] = React.useState(null);

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const addTodo = (
    text,
    dueDate,
    description,
    printType,
    sides,
    acabado,
    total,
    anticipo,
    resta
  ) => {
    const newTodos = [...todos];
    const id = Date.now();
    newTodos.push({
      id,
      text,
      completed: false,
      dueDate,
      description,
      printType, // Agregar el tipo de impresión
      sides,
      acabado,
      total,
      anticipo,
      resta,
    });
    saveTodos(newTodos);
  };
  const completeTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.id === id);
    if (todoIndex !== -1) {
      newTodos[todoIndex].completed = true;
      saveTodos(newTodos);
    }
  };
  const deleteTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.id === id);
    if (todoIndex !== -1) {
      newTodos.splice(todoIndex, 1);
      saveTodos(newTodos);
    }
  };
  const editTodo = (updatedTodo) => {
    const newTodos = todos.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    saveTodos(newTodos);
  };

  const openEditModal = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    setTodoToEdit(todo); // Establece el TODO para editar
    setOpenModal(true);
  };
  const closeModal = () => {
    setOpenModal(false);
    setTodoToEdit(null); // Reinicia el estado de edición cuando el modal se cierra
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        addTodo,
        editTodo, // Asegúrate de incluir esta función
        openEditModal, // Asegúrate de incluir esta función
        closeModal, // Asegúrate de incluir esta función
        todoToEdit, // Asegúrate de incluir el todo a editar
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
