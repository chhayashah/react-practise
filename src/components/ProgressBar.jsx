import React, { useState, useRef } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const intervalRef = useRef(null);

  const startProgress = () => {
    setProgress(0);

    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        const newValue = prev + 10;

        if (newValue >= 100) {
          clearInterval(intervalRef.current);
          return 100;
        }

        return newValue;
      });
    }, 500);
  };

  const stopProgress = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={startProgress}>Start</button>
      <button onClick={stopProgress} style={{ marginLeft: "10px" }}>
        Stop
      </button>
      <div
        style={{
          width: "300px",
          height: "25px",
          background: "#ddd",
          marginTop: "20px",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: "green",
            transition: "0.5s",
          }}
        ></div>
      </div>
      <p>{progress}%</p>
    </div>
  );
};
export default ProgressBar;
