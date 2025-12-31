import { useState } from "react";

function Todos() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(null)

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
    if(edit === id){
      setEdit(null);
      setInput('');
    }
  };

  const handleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    
  };

  const handleEdit = (todo) => {
    setInput(todo.text)
    setEdit(todo.id)
  }

  const handleSave = () => {
    const update = todos.map( todo => todo.id === edit ? {...todo , text : input} : todo)
    setTodos(update)
    setInput('')
    setEdit(null)
  }

  return (
    <div>
      <h2>Todo App</h2>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button style={{ marginLeft: "5px" }} onClick={() => {
        if (edit === null) {
          handleTodo()
        } else {
          handleSave()
        }
      }
      }>
        {edit ? "Save" : "Add"}
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
              <button onClick={() => handleEdit(todo)} style={{ marginLeft: "4px" }}>Edit</button>
              <br /> <br />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todos;
