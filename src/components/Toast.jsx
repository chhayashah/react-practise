import React, { useState } from "react";

const Toast = () => {
  const [show, setShow] = useState(false);

  const handleToast = () => {
    setShow(true);

    setTimeout(() => {
      setShow(false);
    }, 3000);
  };

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={handleToast}>Show Toast</button>
      {show && <div>Successfully Logged In</div>}
    </div>
  );
};
export default Toast;
