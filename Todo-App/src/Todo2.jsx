import { useState, useReducer } from "react";

function Todo2() {
  const intial = [];

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return [...state, action.payload];

      case "DELETE":
        return state.filter((todo) => todo.id !== action.payload);

      case "EDIT":
        return state.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
        );

      case "Complete":
        return state.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        );
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, intial);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text === "") return;
    dispatch({
      type: "ADD",
      payload: { id: Date.now(), text: text, completed: false },
    });
    setText("");
  };

  return (
    <div>
      <h2>Todo App</h2>
      <input value={text} onChange={(e) => setText(e.target.value)} />

      <button onClick={addTodo} style={{ marginLeft: "5px" }}>
        Add
      </button>

      <ul>
        {state.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
            <button
              style={{ marginLeft: "5px" }}
              onClick={() => dispatch({ type: "DELETE", payload: todo.id })}
            >
              Delete
            </button>
            <button
              style={{ marginLeft: "5px" }}
              onClick={() => {
                const newText = prompt("Enter new text", todo.text);
                if (newText.trim() !== "") {
                  dispatch({
                    type: "EDIT",
                    payload: { id: todo.id, text: newText },
                  });
                }
              }}
            >
              Edit
            </button>
            <button
              style={{ marginLeft: "5px" }}
              onClick={() => dispatch({ type: "Complete", payload: todo.id })}
            >
              Complete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo2;
