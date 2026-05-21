import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, title: "Home", content: "Welcome to home page" },
    { id: 2, title: "About", content: "Welcome to about page" },
    { id: 3, title: "Contact", content: "Welcome to contact page" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      {tabs.map((tab) => (
        <button
          style={{ padding: "10px" }}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.title}
        </button>
      ))}
      {tabs.map((tab) => activeTab === tab.id && <p>{tab.content}</p>)}
    </div>
  );
};
export default Tabs;
