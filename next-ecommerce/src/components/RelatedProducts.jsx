"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const RelatedProducts = ({ category }) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      let res = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      let data = await res.json();
      setProducts(data);
    }
    fetchPosts();
  }, [category]);

  return (
    <div className="mt-10">
      <h6 className="text-lg font-bold mb-4">Related Products</h6>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products &&
          products.map((product) => (
            <Link
              href={`/products/${product.id}`}
              key={product.id}
              className="card bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <div className="w-full h-[250px] relative">
                <Image
                  src={product.image}
                  fill
                  alt={product.title}
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="my-2 font-semibold text-md text-gray-800 overflow-hidden whitespace-nowrap text-ellipsis">
                  {product.title}
                </h2>
                <div className="flex justify-between items-center text-sm text-slate-500">
                  <span>{product.category}</span>
                  <span className="font-bold text-green-600">
                    ${product.price}
                  </span>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
