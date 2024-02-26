import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import ToDoList from "./ToDoList";
import { v4 as uuidv4 } from 'uuid';
import "./App.css";

function App() {
  const [listItems, setListItems] = useState([]);

  function addItem(toDo) {
    setListItems(prevItems => {
      return [...prevItems, toDo];
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>TO DO LIST</h1>
      </div>
      <ToDoList onSubmit={addItem} />
      <div>
        <ul>
          {listItems.map((todoItem) => (
            <ToDoItem
              key={uuidv4()}
              id={uuidv4}
              text={todoItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
