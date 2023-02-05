import React from "react";

export default function ShoppingCartProduct({data,deleteFromCart}) {
  return (
    <div>
      <div>
        <img src={data.img} className="card-img-top img-shop " alt="" />
        <h2>{data.name}</h2>
        <p>Price: {data.price}</p>
        <button onClick={() => deleteFromCart(data.id)}>Delete from Cart</button>
      </div>
    </div>
  );
}
