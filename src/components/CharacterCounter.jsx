import React, { useState } from "react";

const CharacterCounter = () => {
    const [text, setText] = useState("");


    return (
        <div style={{padding:"20px"}}>
            <h2>Character Counter</h2>
            <textarea 
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type something..."
                rows={5}
                cols={30}
            />
            <p>Characters: {text.length }</p>
            <p>Words: { 
                text.trim() === "" ? 0 : text.trim().split(/\s+/).length
            }
            </p>
            <button onClick={() => setText("")}>Reset</button>
        </div>
    )

}
export default CharacterCounter;