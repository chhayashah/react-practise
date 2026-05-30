import React, { useState } from "react";

const DarkMode = () => {
    const [dark, setDark] = useState(false);

    return (
        <div
            style={{
                backgroundColor: dark ? "black" : "white",
                color: dark ? "white" : "black",
                height: "100vh",
                padding:"20px",
            }}
        >
        <h1>{dark ? "🌙 Dark Mode" : "☀️ Light Mode"}</h1>
            <button onClick={() => setDark(!dark)}>
                {dark ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    );
}
export default DarkMode;