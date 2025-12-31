import { useState , useReducer } from "react"

function Todo2() {
    
    const intial = []

    const reducer = (state, action) => {
        switch(action.type){
            case "ADD":
                return [...state, action.payload]

        }
    }

    const [state , dispatch] = useReducer(reducer , intial)
  return (
    <div>
     <h2>Todo App</h2>
    </div>
  )
}

export default Todo2
