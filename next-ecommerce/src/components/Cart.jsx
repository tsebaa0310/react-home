"use client";

import React, { useEffect, useState } from "react";
import ProductsItem from "../components/ProductsItem";
import Drawer from "react-modern-drawer";
import Image from "next/image";
import "react-modern-drawer/dist/index.css";

const Cart = ({ isOpen, toggleDrawer }) => {
  const [cartItem, setCartItem] = useState([]);
  const [confirmedItems, setConfirmedItems] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    setCartItem(cartItems);

    const confirmedItems =
      JSON.parse(localStorage.getItem("confirmedItems")) || [];
    setConfirmedItems(confirmedItems);
  }, []);

  const removeAllItems = () => {
    localStorage.clear();
    setCartItem([]);
    setConfirmedItems([]);
  };

  const removeItem = (id) => {
    const updatedItems = cartItem.filter((product) => product.id !== id);
    localStorage.setItem("shoppingCart", JSON.stringify(updatedItems));
    setCartItem(updatedItems);
  };

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

  return (
    <Drawer open={isOpen} onClose={toggleDrawer} direction="right">
      <div className="p-5">
        <h1 className="font-bold mb-2 text-center">Cart Items</h1>
        {cartItem.length > 0 ? (
          cartItem.map((product) => (
            <ProductsItem
              key={product.id}
              product={product}
              removeItem={removeItem}
              confirmItem={confirmItem}
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
        <h1 className="font-bold mb-4 text-center text-xl">
          Your Confirmed Items
        </h1>
        {confirmedItems.length > 0 ? (
          <ul className="space-y-4">
            {confirmedItems.map((item) => (
              <li key={item.id} className="flex items-center p-4 rounded-lg">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={64}
                  height={64}
                  className="rounded-md"
                />
                <p className="ml-4 text-xs font-semibold">{item.title}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-600">No confirmed items.</p>
        )}
        <button className="bg-green-500 text-white rounded-md py-2 w-full mt-4 hover:bg-green-600 transition duration-200">
          Confirm Items
        </button>
      </div>
    </Drawer>
  );
};

export default Cart;
