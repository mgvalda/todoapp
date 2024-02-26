import React from "react";

function ToDoItem(props) {
  return (
    <ul className="listItems">
      <li>{props.text} </li>
    </ul>
  );
}

export default ToDoItem;
