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

  // const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const completedTodos = todos.filter(
    (todo) => todo.status === "completed"
  ).length;

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
      status: "incomplete", // Establece el estado inicial
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
    updateTodoStatus(id, "completed");
  };
  const deleteTodo = (id) => {
    const confirmDelete = window.confirm(
      "¿Estás seguro de que quieres eliminar este pendiente?"
    );

    if (confirmDelete) {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex((todo) => todo.id === id);

      if (todoIndex !== -1) {
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      }
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
  const updateTodoStatus = (id, newStatus) => {
    const confirmChange = window.confirm(
      "¿Estás seguro de que quieres cambiar al siguiente estado?"
    );

    if (!confirmChange) return; // Si el usuario cancela, no se realiza el cambio

    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        // Determina el nuevo estado basado en el estado actual
        const newStatus =
          todo.status === "incomplete"
            ? "inProgress"
            : todo.status === "inProgress"
            ? "completed"
            : "incomplete"; // Vuelve a "incomplete" después de "completed"
        return { ...todo, status: newStatus };
      }
      return todo;
    });

    saveTodos(newTodos);
  };
  const markTodoAsIncomplete = (id) => updateTodoStatus(id, "incomplete");
  const markTodoAsInProgress = (id) => updateTodoStatus(id, "inProgress");
  const markTodoAsCompleted = (id) => updateTodoStatus(id, "completed");

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
        markTodoAsIncomplete,
        markTodoAsInProgress,
        markTodoAsCompleted,
        updateTodoStatus,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
