import React from "react";
import "./footer.css";

function Footer(props) {
  const todos = props.todos;
  return (
    todos &&
    todos.length > 0 && (
      <footer className="footer">
        <span className="todo-count">
          <strong> {todos.length}</strong>
          <span> item</span>
        </span>
        <ul className="filters">
          <li>
            <a href="#a">All</a>
          </li>
          <li>
            <a href="#b">Active</a>
          </li>
          <li>
            <a href="#c">Completed</a>
          </li>
        </ul>
      </footer>
    )
  );
}

export default Footer;
