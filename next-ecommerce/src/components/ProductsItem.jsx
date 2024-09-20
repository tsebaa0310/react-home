"use client";

import Image from "next/image";
import React from "react";

const ProductItem = ({ product, removeItem }) => {
  if (!product) return null;

  return (
    <div className="mb-3 mt-5">
      <div className="grid grid-cols-2 gap-5">
        <div className="relative h-[55px]">
          <Image src={product.image} fill alt="image" />
        </div>
        <div className="w-[200px]">
          <p className="text-black">{product.title}</p>
        </div>
      </div>
      <div className="flex justify-between mt-5">
        <button className="text-black mx-5">✔</button>
        <select name="" id="">
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
        </select>
        <button
          className="text-black mx-5"
          onClick={() => removeItem(product.id)}
        >
          ✗
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
