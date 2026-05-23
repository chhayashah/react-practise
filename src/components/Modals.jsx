import React, { useState } from "react";

const Modals = () => {
    const [open, setOpen] = useState(false);
    return (
      <div style={{ padding: "20px" }}>
        <button onClick={() => setOpen(true)}>Open Modals</button>
        {open && (
          <div>
            <div style={{ padding: "20px" }}>
              {/* <h2>Skills</h2> */}

              <li>React</li>
              <li>Java</li>
              <li>Express</li>

              <button onClick={() => setOpen(false)}>Close</button>
            </div>
          </div>
        )}
      </div>
    );
}
export default Modals;