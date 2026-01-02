import { useState, useReducer } from "react";

function Todo2() {
  const intial = [];

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return [...state, action.payload]

        case "DELETE" :
        return state.filter( (todo) => todo.id !== action.payload)
 
        
        default:
          return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, intial);
  const [text, setText] = useState("");

  const addTodo = () => {
    if(text === "") return ;
      dispatch({type: "ADD" , payload : {id: Date.now() , text : text} })
      setText("");
  }

  return (
    <div>
      <h2>Todo App</h2>
      <input
       value={text}
       onChange={(e) => setText(e.target.value)}
      />

      <button onClick={addTodo} style={{marginLeft : "5px"}}>Add</button>

      <ul>
        {state.map( (todo ,index) => (
          <li key={index}>{todo}
          <button style={{marginLeft : "5px"}} onClick={ (id) => dispatch({type: "DELETE" , payload : id})}>Delete</button>
          </li>
         
        ))}
      </ul>
    </div>
  );
}

export default Todo2;
