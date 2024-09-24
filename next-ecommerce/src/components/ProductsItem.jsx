"use client";

import Image from "next/image";
import React, { useContext } from "react";
import { ShoppingCartContext } from "../lib/ShoppingCartContext";

const ProductItem = ({ product, removeItem }) => {
  const { confirmItem } = useContext(ShoppingCartContext);
  if (!product) return null;

  return (
    <div className="mb-4 mt-5">
      <div className="flex items-center p-4 rounded-lg">
        <Image
          src={product.image}
          alt={product.name}
          width={64}
          height={64}
          className="rounded-md"
        />
        <div className="ml-4">
          <p className="ml-4 text-xs font-semibold ">{product.title}</p>
        </div>
      </div>
      <div className="flex justify-between">
        <span className="text-xs font-semibold">Price:</span>
        <p className="text-xs font-semibold ">${product.price}</p>
      </div>
      <div className="flex justify-between items-center mt-3">
        <button className="text-green-600" onClick={() => confirmItem(product)}>
          ✔
        </button>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button className="text-red-600" onClick={() => removeItem(product.id)}>
          ✗
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
