import { useState } from "react";
import List from "./components/List";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: "a",
    },
    {
      id: 2,
      name: "b",
    },
    {
      id: 3,
      name: "c",
    },
    {
      id: 4,
      name: "d",
    },
  ]);

  const handleInput = (e) => {
    if (e.key === "Enter") {
      if (!e.target.value) {
        alert("empty");
        return;
      }

      let todoNew = {
        id: Math.floor(Math.random() * 100000 + 1),
        name: todo,
      };
      setTodos((prev) => [...prev, todoNew]);
      setTodo("");
    }
  };

  const handleDeleteTodo = (id) => {
    let currentTodos = todos;
    currentTodos = currentTodos.filter((item) => item.id !== id);
    setTodos(currentTodos);
  };

  return (
    <div className="App">
      <h1 className="title"> todos</h1>
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="input-todo"
        type="text"
        placeholder="What needs to be done?"
        onKeyPress={(e) => handleInput(e)}
      />
      <List handleDeleteTodo={handleDeleteTodo} todos={todos} />
      <Footer todos={todos} />
    </div>
  );
}

export default App;
