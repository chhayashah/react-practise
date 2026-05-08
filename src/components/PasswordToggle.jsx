import React, { useState } from "react";

const PasswordToggle = () => {
  const [show, setShow] = useState(false);
  return (
    <div style={{ padding: "20px" }}>
      <input type={show ? "text" : "password"} lable="Enter password" />
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "show"}</button>
    </div>
  );
};
export default PasswordToggle;
