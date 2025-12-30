import { useState } from "react";

function Todos() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  console.log(input);

  const handleTodo = () => {
    if (!input.trim()) return alert("Please Enter Todo");

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);

    setInput("");
  };

  const handleDelete = (id) => {
    const updateState = todos.filter((todo) => todo.id !== id);
    setTodos(updateState);
  };

  const handleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h2>Todo App</h2>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button style={{ marginLeft: "10px" }} onClick={handleTodo}>
        Add
      </button>

      <div>
        <h4>Todo List</h4>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>{" "}
              <button onClick={() => handleDelete(todo.id)}>Delete</button>{" "}
              <button onClick={() => handleComplete(todo.id)}>Complete</button>
              <br /> <br />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todos;
