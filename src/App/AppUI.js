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
  } = React.useContext(TodoContext);
  console.log(searchedTodos);

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
              completed={todo.completed}
              dueDate={todo.dueDate}
              description={todo.description}
              onComplete={() => completeTodo(todo.id)}
              onDelete={() => deleteTodo(todo.id)}
              printType={todo.printType} // Pasando printType al TodoItem
              sides={todo.sides}
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
