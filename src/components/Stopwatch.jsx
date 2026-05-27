import React, { useEffect, useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [running]);

  // Format Time
  const formatTime = () => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${String(hours).padStart(2, "0")} :
            ${String(minutes).padStart(2, "0")} :
            ${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1
        style={{
          fontSize: "40px",
          marginBottom: "20px",
        }}
      >
        {formatTime()}
      </h1>

      <button onClick={() => setRunning(true)}>Start</button>

      <button onClick={() => setRunning(false)} style={{ marginLeft: "10px" }}>
        Stop
      </button>

      <button
        onClick={() => {
          setRunning(false);
          setTime(0);
        }}
        style={{ marginLeft: "10px" }}
      >
        Reset
      </button>
    </div>
  );
};

export default Stopwatch;
