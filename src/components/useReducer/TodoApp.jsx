import React, { useEffect, useReducer } from "react";

import { todoReducer } from "./todoReducer";

import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

import "./TodoApp.css";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = (newTodo) => {
    dispatch({
      type: "ADD",
      payload: newTodo,
    });
  };

  const handleDelete = (id) => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };

  const handleToggle = (id) => {
    dispatch({
      type: "TOGGLE",
      payload: id,
    });
  };

  return (
    <>
      <h1>TodoApp ({todos.length})</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>
        <div className="col-5">
          <TodoAdd
            handleAdd={handleAdd}
          />
        </div>
      </div>
    </>
  );
};
