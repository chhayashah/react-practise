import React, { useState } from "react";

const SearchFilter = () => {
  const [search, setSearch] = useState("");
  const fruits = ["Apple", "Banana", "Mango", "orange", "Grapes", "Pineapple"];

  const filteredItems = fruits.filter((item) => {
    return item.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div style={{ padding: "20px" }}>
      <h3>Search Filter</h3>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search fruit"
      />
      {filteredItems.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};
export default SearchFilter;
