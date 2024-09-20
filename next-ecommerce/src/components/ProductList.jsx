"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  return (
    <div className="p-5 bg-white shadow-md rounded-lg">
      <h3 className="text-xl font-bold mb-4">All Products:</h3>
      <Slider {...settings}>
        {products.map((product) => (
          <Link
            href={`/products/${product.id}`}
            key={product.id}
            className="card p-4 shadow-lg rounded-lg h-[360px] transition-transform transform hover:-translate-y-1 bg-white"
          >
            <div className="w-full h-[250px] relative mb-4 overflow-hidden rounded-lg">
              <Image
                src={product.image}
                fill
                alt={product.title}
                className="object-cover border rounded-lg shadow-sm"
              />
            </div>
            <h2 className="my-2 font-semibold text-lg text-gray-800 overflow-hidden whitespace-nowrap text-ellipsis">
              {product.title}
            </h2>
            <div className="flex justify-between w-full text-sm text-slate-600">
              <span className="font-medium text-xs bg-blue-100 text-blue-800 py-1 px-2 rounded">
                {product.category}
              </span>
              <span className="font-bold text-green-600">{product.price}$</span>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default ProductList;
