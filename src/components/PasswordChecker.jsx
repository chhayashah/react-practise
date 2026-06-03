import React, { useState } from "react";

const PasswordChecker = () => {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  let strength = "";
  let color = "";

  if (password.length < 6) {
    strength = "weak 🔴";
    color = "red";
  } else if (password.length <= 10) {
    strength = "Medium 🟡";
    color = "orange";
  } else {
    strength = "Strong 🟢";
    color = "green";
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Password Strength Checker</h2>
      <input
        type={show ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
      />
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      <p style={{ color }}>Strength: {strength}</p>
      <button
        onClick={() => {
          setPassword("");
          setShow(false);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default PasswordChecker;
