import React from "react";
import { img } from "../assets/imagenes.js";

export default function ProductoItem({ data, addToCart }) {
  return (
    <div>
      <div>
        <h2>{data.name}</h2>
        <p>Price: {data.price}</p>
        <button onClick={() => addToCart(data.id)}>Add to Cart</button>
      </div>
    </div>
  );
}
