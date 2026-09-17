import React, { useState, useEffect } from "react";


const Counterr = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
          console.log("Count changed:", count);
      },[count]);
    return (
        <div>
<button onClick={() => setCount(count+1)}>increment</button>
            <p>count:{count}</p>
        </div>
    )
}
export default Counterr;