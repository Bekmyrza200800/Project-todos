import { useState } from "react";
import Button from "../button/Button";
import "./TodoForm.css";

export const TodoForm = ({ onSubmit, onClear,  }) => {
  const [todoValue, setTodoValue] = useState("");

  const handleTodoInputChange = (event) => {
    setTodoValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todoValue.trim() == "") {
      alert("enter something");
      return;
    }
    onSubmit(todoValue);

  };

  return (
    <div>
      <h2 className="main-title">JS-15 Todo-List</h2>

      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          className="todo-input"
          type="text"
          placeholder="Add new list item"
          value={todoValue}
          onChange={handleTodoInputChange}
        />
        <section className="button-block">
          <Button variant="green">add todo</Button>
          <Button variant="red" type="button" onClick={onClear}>
            clear all
          </Button>
        </section>
      </form>
    </div>
  );
};
