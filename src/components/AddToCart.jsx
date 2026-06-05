import React, { useState } from "react";

const AddToCart = () => {
    const [quantity, setQuantity] = useState(0);

    return (
      <div style={{ padding: "20px" }}>
        {quantity === 0 ? (
          <button onClick={() => setQuantity(1)}>Add to Cart</button>
        ) : (
          <div>
            <button onClick={() => setQuantity(quantity - 1)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
        )}
      </div>
    );
}
export default AddToCart;