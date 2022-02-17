import React from "react";
import "./list.css";
const List = (props) => {
  const { todos, handleDeleteTodo } = props;

  const handleDelete = (id) => {
    handleDeleteTodo(id);
  };
  return (
    <ul className="todo-list">
      {todos.map((todo) => {
        return (
          <div key={todo.id} className="view">
            <input className="toogle" type="checkbox"></input>
            <label>{todo.name}</label>
            <span onClick={() => handleDelete(todo.id)} className="destroy">
              x
            </span>
          </div>
        );
      })}
    </ul>
  );
};

export default List;
