"use client";

import React, { useState, useContext } from "react";
import Cookies from "js-cookie";
import Link from "next/link";
import Image from "next/image";
import Cart from "../Cart";
import { ShoppingCartContext } from "../../lib/ShoppingCartContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItem, confirmedItems } = useContext(ShoppingCartContext);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleLogout = () => {
    Cookies.remove("token");
  };

  return (
    <>
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
            {["HOME", "SHOP", "PRODUCT", "PAGES", "BLOGS"].map((item) => (
              <Link
                key={item}
                href="/"
                className="hover:text-gray-500 transition duration-300"
              >
                {item}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <button
              aria-label="Search"
              className="relative p-2 transition-transform duration-300 hover:bg-gray-100 rounded-md focus:outline-none"
            >
              <Image
                src="/search.png"
                alt="search-icon"
                width={25}
                height={25}
                className="object-contain"
              />
            </button>
            <button
              aria-label="View Cart"
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
              {cartItem?.length > 0 && (
                <div className="absolute -top-1 -right-1 text-xs bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
                  {cartItem.length}
                </div>
              )}
              {confirmedItems?.length > 0 && (
                <div className="absolute -top-1 -right-1 text-xs bg-green-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
                  {confirmedItems.length}
                </div>
              )}
            </button>
            <Link
              aria-label="User Profile"
              href="/register"
              className="relative p-2 transition-transform duration-300 hover:bg-gray-100 rounded-md focus:outline-none"
            >
              <Image
                src="/user.png"
                alt="user-icon"
                width={25}
                height={25}
                className="object-contain"
              />
            </Link>
            <button
              aria-label="Quit"
              onClick={handleLogout}
              className="relative p-2 transition-transform duration-300 hover:bg-gray-100 rounded-md focus:outline-none"
            >
              <Image
                src="/quit.png"
                alt="quit-icon"
                width={25}
                height={25}
                className="object-contain"
              />
            </button>
          </div>
        </nav>
      </header>
      <Cart isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Header;
