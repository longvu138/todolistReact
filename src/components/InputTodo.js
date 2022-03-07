import React, { useState } from "react";
import "./InputTodo.css";
const InputTodo = (props) => {
  const { setTodos, todos, checkTodos } = props;

  const [todo, setTodo] = useState("");

  const handleInput = (e) => {
    if (e.key === "Enter") {
      if (!e.target.value) {
        alert("empty");
        return;
      }

      let todoNew = {
        id: Math.floor(Math.random() * 100000 + 1),
        name: todo,
        completed: false,
      };
      setTodos((prev) => [...prev, todoNew]);
      setTodo("");
    }
  };

  return (
    <>
      <label className="toggle-all">
        {todos && todos.length > 0 && (
          <img
            onClick={checkTodos}
            alt="down-all"
            src={require("./assets/icondown.png")}
            width="40"
            height="20px"
          />
        )}
      </label>
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="input-todo"
        type="text"
        placeholder="What needs to be done?"
        onKeyPress={(e) => handleInput(e)}
      />
    </>
  );
};

export default InputTodo;
