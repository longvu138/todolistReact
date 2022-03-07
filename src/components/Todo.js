import React, { useState } from "react";

const Todo = (props) => {
  const { todos, todo, handleDeleteTodo, updateCompleted, setTodos } = props;
  const [text, setText] = useState(todo.name);

  const [toggle, setToggle] = useState({
    status: false,
    id: "",
  });

  const handleDelete = (id) => {
    handleDeleteTodo(id);
  };
  const handleCompleted = (id) => {
    updateCompleted(id);
  };

  const handleInput = (e, id) => {
    if (e.key === "Enter") {
      const editTodo = todos.map((todo) =>
        todo.id === id ? { ...todo, name: e.target.value } : todo
      );
      setTodos(editTodo);
      setToggle(true);
      setText("");
    }
  };
  const id = todo.id;
  return (
    <div key={todo.id}>
      {toggle.status && id === toggle.id ? (
        <div key={id} className="view" style={{ padding: "0" }}>
          <input
            className="editing"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyPress={(e) => handleInput(e, id)}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setToggle(true);
                event.preventDefault();
                event.stopPropagation();
              }
            }}
          />
        </div>
      ) : (
        <div key={id} className="view">
          <input
            onClick={() => handleCompleted(id)}
            className="toggle"
            type="checkbox"
            defaultChecked={todo.completed}
          ></input>
          <label
            onDoubleClick={() => {
              setToggle({
                status: true,
                id: id,
              });
            }}
            className={todo.completed ? "completed" : ""}
          >
            {todo.name}
          </label>

          <span onClick={() => handleDelete(todo.id)} className="destroy">
            x
          </span>
        </div>
      )}
    </div>
  );
};

export default Todo;
