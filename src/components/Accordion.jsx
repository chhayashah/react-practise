import React, { useState } from "react";

const Accordion = () => {
    const [active, setActive] = useState(null);

    const data = [
      {
        id: 1,
            question: "What is React?",
            answer:"React is a JS library."
        },
        {
            id: 2,
            question: "What is JSX",
            answer:"JSX allows us to write HTML inside JS."
        }
    ];

    const handleToggle = (id) => {
        setActive(active === id ? null : id);
    };

    return (
        <div style={{padding:"20px"}}>
            <h3>Accordion</h3>
            {data.map((item) => (
                <div key={item.id}>
                    <h3 onClick={() => handleToggle(item.id)}>{item.question}</h3>
                    {active === item.id && (
                        <p>{item.answer }</p>
                    )}
                </div>
            ))}
        </div>
    )
}
export default Accordion;