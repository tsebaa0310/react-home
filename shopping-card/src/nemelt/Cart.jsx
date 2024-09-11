import React from "react";
import Table from "react-bootstrap/Table";
import { useCart } from "./CartContext";

const Cart = () => {
  const { state, dispatch } = useCart();

  const removeFromCart = (product) => {
    dispatch({ type: "REMOVE_ITEM", payload: product });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <div>
      <h1>Shopping Cart</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
              <td>
                <button onClick={() => removeFromCart(item)}>remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
