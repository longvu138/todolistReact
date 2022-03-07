import { useState } from "react";
import List from "./components/List";
import "./App.css";
import Footer from "./components/Footer";
import InputTodo from "./components/InputTodo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const [todos, setTodos] = useState([]);

  const updateCompleted = (id) => {
    const todoUpdate = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

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

  const clearCompleted = () => {
    setTodos((todos) => filterTodosLeft(todos));
  };

  return (
    <Router>
      <div className="App">
        <h1 className="title"> todos</h1>
        <InputTodo todos={todos} setTodos={setTodos} />
        <Switch>
          <Route path="/" exact>
            <List
              updateCompleted={updateCompleted}
              handleDeleteTodo={handleDeleteTodo}
              todos={todos}
              setTodos={setTodos}
            />
          </Route>
          <Route path="/active">
            <List
              updateCompleted={updateCompleted}
              handleDeleteTodo={handleDeleteTodo}
              todos={todos.filter((item) => !item.completed)}
              setTodos={setTodos}
            />
          </Route>
          <Route path="/completed">
            <List
              updateCompleted={updateCompleted}
              handleDeleteTodo={handleDeleteTodo}
              todos={todos.filter((item) => item.completed)}
              setTodos={setTodos}
            />
          </Route>
        </Switch>
        <Footer
          clearCompleted={clearCompleted}
          numOfTodosLeft={filterTodosLeft(todos).length}
          todos={todos}
        />
      </div>
    </Router>
  );
}

export default App;
