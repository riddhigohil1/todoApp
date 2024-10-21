export default function TodoList({ todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));

  return (
    <div className="todolist">
      <ul className="todoitem">
        {sortedTodos.map((item, index) => (
          <li key={index} className="itemname">
            <span
              className={item.done ? "completed" : ""}
              onClick={() => handleClick(item.name)}
            >
              {item.name}
            </span>
            <span>
              <button onClick={() => handleDelete(item)} className="deleteBtn">
                x
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
