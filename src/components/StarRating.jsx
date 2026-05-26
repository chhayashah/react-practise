import React, { useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div style={{ padding: "20px" }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => setRating(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          style={{
            color: star <= (hover || rating) ? "gold" : "gray",
            cursor: "pointer",
            fontSize: "40px",
          }}
        >
          ★
        </span>
      ))}
      <p>Rating:{rating}</p>
      <button onClick={() => setRating(0)}>Reset</button>
    </div>
  );
};
export default StarRating;
