
import { useState , useEffect} from "react";

function Todo1() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(() => {
    const saveTodos = localStorage.getItem("todos");
    return saveTodos ? JSON.parse(saveTodos) : [];
  });

  const [edit, setEdit] = useState(null);

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

  const handleComplete = (id) => {
        setTodos(prev => 
            prev.map((todo) => (
                todo.id === id ? {...todo , completed : !todo.completed} : todo
            ))
        )
  }

  const handleDelete = (id) => {
    const updateTodo = todos.filter( (todo) => todo.id !== id)
    setTodos(updateTodo)
    if(edit === id){
        setInput('')
        setEdit(null)

    }
  }

  const handleEdit = (todo) => {
    setInput(todo.text)
    setEdit(todo.id)
  }

  const handleSave = () => {
    const update = todos.map(todo => todo.id === edit ? {...todos , text : input} : todo)
    setTodos(update)
    setInput('')
    setEdit(null)
  }

  useEffect( () => {
    localStorage.setItem("todos" , JSON.stringify(todos))
  },[todos])

  return (
    <div>
      <h2>Todo App</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button style={{ marginLeft: "4px" }} 
     onClick={() => {
        if(edit === null){
            handleTodo()
        }else {
            handleSave()
        }
     }}
      >
        {edit ? "Save" : "Add"}
      </button>

      <h3>Todo List</h3>
      <div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
                <span style={{textDecoration : todo.completed ? "line-through" : "none"}}>
                 {todo.text}
                </span>
             
              <button style={{ marginLeft: "4px" }} onClick={() => handleComplete(todo.id)}>Complete</button>
              <button style={{ marginLeft: "4px" }} onClick={() =>handleEdit(todo)}>Edit</button>
              <button style={{ marginLeft: "4px" }} onClick={() => handleDelete(todo.id)}>Delete</button>
              <br/>
              <br/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo1;
