"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { ShoppingCartContext } from "../../lib/ShoppingCartContext";

const Checkout = () => {
  const { confirmedItems, clearCart } = useContext(ShoppingCartContext);

  const totalPrice = confirmedItems.reduce(
    (total, product) => total + product.price,
    0
  );

  return (
    <div className="container mx-auto p-5 grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
      <div className="col-span-2">
        <div className="flex justify-between items-center mt-6">
          <h1 className="text-2xl font-bold mb-5">Your Cart</h1>
          <button
            onClick={clearCart}
            className="bg-gray-500 text-white py-2 px-4 rounded-md"
          >
            Clear Cart
          </button>
        </div>

        {confirmedItems.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            <ul className="space-y-4">
              {confirmedItems.map((product) => (
                <li
                  key={product.id}
                  className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md"
                >
                  <div className="flex items-center space-x-4">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={64}
                      height={64}
                      className="rounded-md"
                    />
                    <div>
                      <p className="font-semibold w-[600px] my-2">
                        {product.title}
                      </p>
                      <p className="text-gray-500 flex items-center space-x-1">
                        {Array.from({ length: 5 }, (_, index) => (
                          <FontAwesomeIcon
                            key={index}
                            icon={faStar}
                            className={
                              index < product.rating.rate
                                ? "text-yellow-500"
                                : "text-gray-300"
                            }
                          />
                        ))}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="font-semibold text-lg">{product.price} $</p>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      <div className="col-span-1">
        <h2 className="text-xl font-bold mb-4">Payment Information</h2>
        <div className="bg-white p-4 rounded-lg shadow-md space-y-4">
          <div className="flex justify-between">
            <span className="font-semibold">Total Price:</span>
            <span className="font-semibold text-lg">
              {totalPrice.toFixed(2)} $
            </span>
          </div>
          <div className="flex flex-col space-y-3">
            <button className="bg-blue-600 text-white py-3 rounded-md">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
