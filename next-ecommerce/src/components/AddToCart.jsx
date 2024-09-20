"use client";

import React, { useEffect, useState } from "react";

const AddToCart = ({ product }) => {
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    const shoppingCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    setCartItem(shoppingCart);
  }, []);

  const addToCart = (product) => {
    const updatedCart = [...cartItem, product];
    localStorage.setItem("shoppingCart", JSON.stringify(updatedCart));
    setCartItem(updatedCart);
  };

  return (
    <button
      className="bg-blue-500 text-white rounded-md py-3"
      onClick={() => addToCart(product)}
    >
      Add to cart
    </button>
  );
};

export default AddToCart;
