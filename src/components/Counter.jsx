import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <h2>{count}</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button
          onClick={() => {
            if (count > 0) {
              setCount(count - 1);
            }
          }}
        >
          -
        </button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}
export default Counter;