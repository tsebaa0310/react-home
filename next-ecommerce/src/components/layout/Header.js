"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import ProductsItem from "../ProductsItem";
// import Login from "./Login";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItem, setCartItem] = useState(null);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const fetchCartItems = async () => {
      const response = await fetch("https://fakestoreapi.com/carts/5");
      const data = await response.json();
      setCartItem(data);
    };

    fetchCartItems();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="flex items-center justify-between p-4 mx-auto max-w-6xl">
        <Link
          href="/"
          className="relative p-2 transition-transform duration-300 hover:bg-gray-100 rounded-md focus:outline-none"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={200}
            height={80}
            className="object-contain"
          />
        </Link>
        <div className="hidden md:flex space-x-6 text-gray-700">
          <Link
            href="/"
            className="hover:text-gray-500 transition duration-300"
          >
            HOME
          </Link>
          <Link
            href="/shop"
            className="hover:text-gray-500 transition duration-300"
          >
            SHOP
          </Link>
          <Link
            href="/products"
            className="hover:text-gray-500 transition duration-300"
          >
            PRODUCT
          </Link>
          <Link
            href="/pages"
            className="hover:text-gray-500 transition duration-300"
          >
            PAGES
          </Link>
          <Link
            href="/blogs"
            className="hover:text-gray-500 transition duration-300"
          >
            BLOGS
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <button className="relative p-2 transition-transform duration-300 hover:bg-gray-100 rounded-md focus:outline-none">
            <Image
              src="/search.png"
              alt="search-icon"
              width={25}
              height={25}
              className="object-contain"
            />
          </button>
          <button
            onClick={toggleDrawer}
            className="relative p-2 transition-transform duration-300 hover:bg-gray-100 rounded-md focus:outline-none"
          >
            <Image
              src="/cart-icons.png"
              alt="cart-icon"
              width={25}
              height={25}
              className="object-contain"
            />
            <span className="absolute -top-1 -right-1 text-xs bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
              {cartItem ? cartItem.products.length : 0}
            </span>
          </button>
          <button className="relative p-2 transition-transform duration-300 hover:bg-gray-100 rounded-md focus:outline-none">
            <Image
              src="/user.png"
              alt="user-icon"
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
          <button className="bg-gray-500 text-white rounded-md py-1.5 px-5 mt-4 w-full">
            Confirm
          </button>
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
