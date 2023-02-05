import React from "react";

export default function ShoppingCartProduct({data,deleteFromCart}) {
  return (
    <div>
      <div>
        <h2>{data.name}</h2>
        <p>Price: {data.price}</p>
        <button onClick={() => deleteFromCart(data.id)}>Delete from Cart</button>
      </div>
    </div>
  );
}
