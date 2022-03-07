import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
function Footer(props) {
  const { numOfTodosLeft, clearCompleted, todos } = props;

  return (
    <>
      {todos && todos.length > 0 && (
        <footer className="footer">
          <span className="todo-count">
            <strong> {numOfTodosLeft}</strong>
            <span> </span>
            <span>{numOfTodosLeft > 1 ? "items" : "item"}</span>
            <span> left</span>
          </span>
          <ul className="filters">
            <li>
              <Link to="/">All</Link>
            </li>
            <li>
              <Link to="/active">Active</Link>
            </li>
            <li>
              <Link to="/completed">Completed</Link>
            </li>

            {numOfTodosLeft < todos.length && (
              <a
                href="#/clear"
                className="clear-completed"
                onClick={clearCompleted}
              >
                Clear completed
              </a>
            )}
          </ul>
        </footer>
      )}
    </>
  );
}

export default Footer;
