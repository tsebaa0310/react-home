"use client";

import React, { useContext } from "react";
import Image from "next/image";
import ProductsItem from "../components/ProductsItem";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { ShoppingCartContext } from "../lib/ShoppingCartContext";

const Cart = ({ isOpen, toggleDrawer }) => {
  const { cartItem, removeItem, clearCart, confirmedItems, confirmItem } =
    useContext(ShoppingCartContext);

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
            />
          ))
        ) : (
          <p className="text-center">Your cart is empty.</p>
        )}
        <button
          className="bg-gray-500 text-white rounded-md py-1.5 w-full mt-4"
          onClick={clearCart}
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
