import React, { useState } from "react";

const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const data = [
      "item 1",
      "item 2",
      "item 3",
      "item 4",
      "item 5",
      "item 6",
      "item 7",
      "item 8",
      "item 9",
      "item 10",
    ];
    const itemsPerPage = 3;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = data.slice(startIndex, endIndex);

    return (
      <div style={{padding: "20px"}}>
        {currentItems.map((item) => (
          <p>{item}</p>
        ))}
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage-1)}
        >
          Previous
        </button>
        <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
      </div>
    );
}
export default Pagination;