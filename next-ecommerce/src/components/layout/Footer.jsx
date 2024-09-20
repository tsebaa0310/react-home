"use client";

import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" py-10">
      <div className="mx-auto px-5">
        <div className="justify-around flex">
          <div>
            <h4 className="text-lg font-bold mb-4 text-gray-800">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-500 transition duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-blue-500 transition duration-200"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-blue-500 transition duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-blue-500 transition duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-gray-800">Contact Us</h4>
            <p className="text-gray-600">address: Mongolia</p>
            <p className="text-gray-600">address: Ulaanbaatar</p>
            <p className="text-gray-600">Email: test@gmail.com</p>
            <p className="text-gray-600">Phone: (123) 456-7890</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-gray-800">Follow Us</h4>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-xl text-gray-600 hover:text-blue-500 transition" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-xl text-gray-600 hover:text-blue-500 transition" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-xl text-gray-600 hover:text-blue-500 transition" />
              </Link>
            </div>
          </div>
        </div>
        <hr className="my-5 border-gray-300" />
        <p className="text-center text-sm text-gray-600">
          © 2024 . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
