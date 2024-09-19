"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Categories } from "./Categories";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import ProductsItem from "../ProductsItem";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const [cartItem, setCartItem] = useState(null);

  useEffect(() => {
    const fetchCartItems = async () => {
      const response = await fetch("https://fakestoreapi.com/carts/5");
      const data = await response.json();
      setCartItem(data);
    };

    fetchCartItems();
  }, []);

  return (
    <header className="bg-white shadow-md">
      <nav className="flex items-center justify-between mx-auto">
        <Link href="/" className="flex items-center mx-20">
          <Image
            src="/logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="object-contain"
          />
          <h1 className="mx-2">aaaaaaaa</h1>
        </Link>
        <div className="flex">
          <Categories />
          <button onClick={toggleDrawer}>
            <Image
              src="/cart-icons.png"
              alt="cart-icon"
              width={25}
              height={25}
              className="object-contain"
            />
          </button>
        </div>
      </nav>

      <Drawer open={isOpen} onClose={toggleDrawer} direction="right">
        <div className="p-5">
          <h1 className="font-bold mb-2 text-center">Cart Items</h1>
          {cartItem &&
            cartItem.products.map((product) => (
              <ProductsItem
                key={product.productId}
                productId={product.productId}
                quantity={product.quantity}
              />
            ))}
          <button className="bg-blue-500 text-white rounded-md py-1.5 px-5">
            confirm
          </button>
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
