import React, { useState } from "react";

function ToDoItem(props) {
  let [complete, setComplete] = useState(false);

  const updateStyle = {
    textDecoration: "line-through",
  };

  function onComplete() {
    if (complete === false) {
      setComplete(true);
    } else {
      setComplete(false);
    }
  }

  return (
    <ul className="listItems">
      <li onClick={onComplete} style={complete ? updateStyle : null}>
        {props.text}
      </li>
    </ul>
  );
}

export default ToDoItem;
