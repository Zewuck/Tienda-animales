import React, { useReducer } from "react";
import ProductItem from "../components/ProductItem";
import ShoppingCartProduct from "../components/ShoppingCartProduct";
import {
  reducerCart,
  productsInitialState,
} from "../reducers/shoppingCartReducer";
import TYPES from "../reducers/actionTypes";

export default function Tienda() {
    const [state, dispatch] = useReducer(reducerCart, productsInitialState);

  const addToCart = (id) => {
    dispatch({
      type: TYPES.ADD_TO_CART,
      payload: id
    })
  }

  const deleteFromCart = (id) => {
    dispatch({
      type: TYPES.DELETE_PRODUCT_FROM_CART,
      payload: id
    })
  }

  const clearCart = () => {
    dispatch({
      type: TYPES.DELETE_ALL_FROM_CART
    })
  }

  const calculateTotalPriceOfCart = () => {
    dispatch({ type: TYPES.CALCULATE_TOTAL_PRICE_OF_THE_CART })
  }


  return (
    <div className="nav-margin">
      <div >
        {
          state.products.map((product) => {
            return <ProductItem key={product.id} data={product} addToCart={addToCart} />
          })
        }
      </div>

      <div>
        <br /> <br /> ------------------------------------------------------------------------------------------------------------------------------------------------------------</div>
      <h2 >Shopping Cart</h2>
      <div>
        <button  onClick={() => calculateTotalPriceOfCart()}>Total Price</button>
        {state.totalPriceShoppingCart > 0 && <p>Total Price: {state.totalPriceShoppingCart}</p>}
        <button  onClick={() => clearCart()}>Clear cart</button>
      </div>
      {
        state.cart.length === 0 && <p >There are no products in the cart</p>
      }

      <div >


        {
          state.cart.map((productCart) => {
            return <ShoppingCartProduct key={productCart.id + (Math.random() * 50)} data={productCart} deleteFromCart={deleteFromCart} />
          })
        }
      </div>
    </div>
  );
}
