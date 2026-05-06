import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: input,
      },
    ]);
    setInput(" ");
  };
  const deleteTodo = (id) => {
    const updated = todos.filter((todo) => todo.id !== id);
    setTodos(updated);
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="enter todo"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => deleteTodo(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Todo;
