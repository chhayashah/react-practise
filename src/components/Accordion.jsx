import React, { useState } from 'react';

const Accordion = () => {
    const [active, setActive] = useState(null);

    const data = [
      {
        title: "What is React?",
        content: "React is a JS library",
      },
      { title: "What is JS?", content: "JavaScript is a language" },
      { title: "What is HTML?", content: "HTML is markup language" },
    ];

    return (
        <>
            <h1>Accordion</h1>
            {data.map((item, index) => (
                <div key={index}>
                    <h3 onClick={()=>setActive(active===index ? null : index)}>{item.title}</h3>
                    {active === index && <p>{item.content}</p>}
                </div>
            ))}
        </>
    )
}
export default Accordion;