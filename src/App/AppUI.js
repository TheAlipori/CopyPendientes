import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { TodoContext } from "../TodoContext";
import { TodoForm } from "../TodoForm";
import React from "react";
import { Modal } from "../Modal";
function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    openEditModal, // Importa la función para abrir el modal de edición
    onStatusChange,
    updateTodoStatus,
    markTodoAsIncomplete,
    markTodoAsInProgress,
    markTodoAsCompleted,
  } = React.useContext(TodoContext);

  return (
    <>
      <div className="container">
        <img src="/isologo.png" className="logo"></img>
        <TodoCounter />
        <TodoSearch />
        <TodoList>
          {loading && (
            <>
              <TodosLoading />
              <TodosLoading />
              <TodosLoading />
            </>
          )}
          {error && <TodosError />}
          {!loading && searchedTodos.length == 0 && <EmptyTodos />}

          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              text={todo.text}
              status={todo.status} // Usa status en lugar de completed
              dueDate={todo.dueDate}
              description={todo.description}
              onStatusChange={(newStatus) => {
                if (newStatus === "completed") markTodoAsCompleted(todo.id);
                else if (newStatus === "inProgress")
                  markTodoAsInProgress(todo.id);
                else markTodoAsIncomplete(todo.id);
              }}
              onDelete={() => deleteTodo(todo.id)}
              printType={todo.printType}
              sides={todo.sides}
              acabado={todo.acabado}
              total={todo.total}
              anticipo={todo.anticipo}
              resta={todo.resta}
              onEdit={() => openEditModal(todo.id)}
            />
          ))}
        </TodoList>

        <CreateTodoButton />
        {openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}
      </div>
    </>
  );
}
export { AppUI };
