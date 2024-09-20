"use client";

import React, { useEffect, useState } from "react";
import ProductsItem from "../components/ProductsItem";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const Cart = ({ isOpen, toggleDrawer }) => {
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("shoppingCart"));
    setCartItem(cartItems);
  }, [setCartItem]);

  const removeAllItems = () => {
    localStorage.clear();
    setCartItem([]);
  };

  const removeItem = (id) => {
    const updatedItems = cartItem.filter((product) => product.id !== id);
    localStorage.setItem("shoppingCart", JSON.stringify(updatedItems));
    setCartItem(updatedItems);
  };

  return (
    <Drawer open={isOpen} onClose={toggleDrawer} direction="right">
      <div className="p-5">
        <h1 className="font-bold mb-2 text-center">Cart Items</h1>
        {cartItem?.length > 0 ? (
          cartItem.map((product) => (
            <ProductsItem
              key={product.id}
              product={product}
              cartItem={cartItem}
              removeItem={removeItem}
            />
          ))
        ) : (
          <p className="text-center">Your cart is empty.</p>
        )}
        <button
          className="bg-gray-500 text-white rounded-md py-1.5 w-full"
          onClick={removeAllItems}
        >
          Remove all
        </button>
      </div>
      <div className="p-5">
        <h1 className="font-bold mb-2 text-center">Your Confirmed Items</h1>
        <button className="bg-blue-500 text-white rounded-md py-1.5 w-full">
          ..
        </button>
      </div>
    </Drawer>
  );
};

export default Cart;
