import React, { useState } from "react";

function ToDoList(props) {
  const [toDo, setToDo] = useState("");

  function handleChange(e) {
    const newItem = e.target.value;
    setToDo(newItem);
  }

  function handleSubmit(e){
      e.preventDefault();
      props.onSubmit(toDo);
      setToDo("");
    };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input"
        onChange={handleChange} 
        type="text" 
        placeholder="Enter your To Do"
        value={toDo} />
      <button><span className="add">ADD</span></button>
    </form>
  );
  }

export default ToDoList;
