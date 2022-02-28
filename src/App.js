import { useState } from "react";
import List from "./components/List";
import "./App.css";
import Footer from "./components/Footer";
import InputTodo from "./components/InputTodo";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: "a",
      completed: true,
    },
    {
      id: 2,
      name: "b",
      completed: true,
    },
    {
      id: 3,
      name: "c",
      completed: false,
    },
    {
      id: 4,
      name: "d",
      completed: true,
    },
  ]);
  const updateCompleted = (id) => {
    const todoUpdate = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    // console.log(todoUpdate);
    setTodos(todoUpdate);
  };

  const handleDeleteTodo = (id) => {
    let currentTodos = todos;
    currentTodos = currentTodos.filter((item) => item.id !== id);
    setTodos(currentTodos);
  };

  const filterTodosLeft = (todos) => {
    return todos.filter((item) => !item.completed);
  };

  return (
    <div className="App">
      <h1 className="title"> todos</h1>
      <InputTodo todos={todos} setTodos={setTodos} />
      <List
        updateCompleted={updateCompleted}
        handleDeleteTodo={handleDeleteTodo}
        todos={todos}
      />
      <Footer numOfTodosLeft={filterTodosLeft(todos).length} todos={todos} />
    </div>
  );
}

export default App;
