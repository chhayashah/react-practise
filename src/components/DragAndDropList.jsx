import React, { useState } from "react";

const DragAndDropList = () => {
  const [items, setItems] = useState([
    "React",
    "JavaScript",
    "Node.js",
    "Express",
    "MongoDB",
  ]);

  const [dragItem, setDragItem] = useState(null);

  const handleDrop = (dropIndex) => {
    const updatedItems = [...items];
    const draggedItem = updatedItems[dragItem];
    updatedItems.splice(dragItem, 1);
    updatedItems.splice(dropIndex, 0, draggedItem);

    setItems(updatedItems);
    setDragItem(null);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Drag and Drop List</h2>

      {items.map((item, index) => (
        <div
          key={index}
          draggable
          onDragStart={() => setDragItem(index)}
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => handleDrop(index)}
          style={{
            padding: "12px",
            margin: "10px 0",
            border: "1px solid #ccc",
            borderRadius: "5px",
            cursor: "grab",
            backgroundColor: "#f4f4f4",
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
};
export default DragAndDropList;
