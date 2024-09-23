"use client";

import React, { useState, useEffect, createContext } from "react";
export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);
  const [confirmedItems, setConfirmedItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    setCartItem(savedCart);

    const confirmedItems =
      JSON.parse(localStorage.getItem("confirmedItems")) || [];
    setConfirmedItems(confirmedItems);
  }, []);

  const confirmItem = (product) => {
    setConfirmedItems((prevConfirmed) => {
      const updatedConfirmed = [...prevConfirmed, product];
      localStorage.setItem("confirmedItems", JSON.stringify(updatedConfirmed));
      return updatedConfirmed;
    });
    const updatedItems = cartItem.filter((item) => item.id !== product.id);
    localStorage.setItem("shoppingCart", JSON.stringify(updatedItems));
    setCartItem(updatedItems);
  };

  const addToCart = (product) => {
    const updatedCart = [...cartItem, product];
    localStorage.setItem("shoppingCart", JSON.stringify(updatedCart));
    setCartItem(updatedCart);
  };

  const removeItem = (id) => {
    const updatedItems = cartItem.filter((product) => product.id !== id);
    localStorage.setItem("shoppingCart", JSON.stringify(updatedItems));
    setCartItem(updatedItems);
  };

  const clearCart = () => {
    localStorage.clear();
    setCartItem([]);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItem,
        addToCart,
        removeItem,
        clearCart,
        confirmItem,
        confirmedItems,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
