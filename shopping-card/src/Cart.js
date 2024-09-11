// Cart.js
import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);

  const handleRemoveItem = (item) => {
    dispatch({ type: "REMOVE_ITEM", payload: item });
  };

  const handleClearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <div>
      <h1>Cart</h1>
      <button onClick={handleClearCart}>Clear Cart</button>
      <ul>
        {state.cartItems.map((item) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <button onClick={() => handleRemoveItem(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
