"use client";

import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import ProductsItem from "../components/ProductsItem";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Checkout from "../app/checkout/page";
import { ShoppingCartContext } from "../lib/ShoppingCartContext";

const Cart = ({ isOpen, toggleDrawer }) => {
  const { cartItem, removeItem, clearCart } = useContext(ShoppingCartContext);

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
        <p className="m-3 text-center">your confirm items here.</p>
        <Link
          href="/checkout"
          className="bg-green-500 text-white text-center w-full rounded-md py-2 mt-4 block"
        >
          Confirm Items
        </Link>
      </div>
    </Drawer>
  );
};

export default Cart;
