import React from "react";
import "./footer.css";

function Footer(props) {
  const { numOfTodosLeft, todos } = props;
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
              {/* <a href="#/" 
         className={`${activeButton === 'ALL' ? "selected" : ''}`}
         onClick={() => setStatusFilter('ALL')}
         >All</a> */}
            </li>
            <li>
              <a href="#/active">Active</a>
            </li>
            <li>
              <a href="#c">Completed</a>
            </li>
          </ul>
        </footer>
      )}
    </>
  );
}

export default Footer;
