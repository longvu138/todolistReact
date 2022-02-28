import React, { useState } from "react";
import "./list.css";
const List = (props) => {
  const { todos, handleDeleteTodo, updateCompleted } = props;
  const handleDelete = (id) => {
    handleDeleteTodo(id);
  };
  const handleCompleted = (id) => {
    updateCompleted(id);
  };

  return (
    <div className="todo-list">
      {todos.map((todo) => {
        return (
          <div key={todo.id} className="view">
            <input
              onClick={() => handleCompleted(todo.id)}
              className="toggle"
              type="checkbox"
              defaultChecked={todo.completed}
            ></input>
            <label className={todo.completed ? "completed" : ""}>
              {todo.name}
            </label>
            <span onClick={() => handleDelete(todo.id)} className="destroy">
              x
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default List;
