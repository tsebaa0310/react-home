"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Categories } from "./Categories";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="flex justify-between items-center p-5 max-w-6xl mx-auto">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="object-contain"
          />
        </Link>
        <div className="flex space-x-4">
          <Categories />
          <Link
            href="/cart"
            className="text-slate-700 hover:text-blue-600 transition duration-200"
          >
            <Image
              src="/icon-cart.png"
              alt="cart-icon"
              width={20}
              height={20}
              className="object-contain"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
