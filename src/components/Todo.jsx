import React, { useState } from "react";

const Todo = () => {
    const [input, setInput] = useState("");
    const [todo, setTodo] = useState([]);

    const addTodo = () => {
        if (input.trim() === "") return;

        setTodo([...todo, {
            id: Date.now(),
            text:input
        }]);
        setInput("");
    }

    const deleteTodo = (id) => {
        const updated = todo.filter((item) => item.id !== id);
        setTodo(updated);
    }

    return (
      <>
        <h1>Todo</h1>
            <input value={input} onChange={(e) => setInput(e.target.value)} 
                placeholder="Add a task..."
        />

        <button onClick={addTodo}>Add</button>
        
            
            <ul>
                {todo.map((item) => (
                    
                      <li key={item.id}>
                        {item.text}
                        <button onClick={() => deleteTodo(item.id)}>
                          Delete
                        </button>
                      </li>
                    
                ))}
            </ul>
      </>
    );
}
export default Todo;