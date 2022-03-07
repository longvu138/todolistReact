import React from "react";
import "./list.css";
import Todo from "./Todo";
const List = (props) => {
  const { todos, handleDeleteTodo, updateCompleted, setTodos } = props;

  return (
    <div className="todo-list">
      {todos.map((todo) => {
        const id = todo.id;
        return (
          <Todo
            handleDeleteTodo={handleDeleteTodo}
            updateCompleted={updateCompleted}
            setTodos={setTodos}
            todos={todos}
            todo={todo}
            key={id}
          />
        );
      })}
    </div>
  );
};

export default List;
