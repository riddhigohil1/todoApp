import { useState } from "react";

export default function TodoForm({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }

  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <div className="todoContainer">
        <input
          className="todoInput"
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          value={todo.name}
          type="text"
          placeholder="Enter todo item..."
        />
        <button className="todoButton" type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
