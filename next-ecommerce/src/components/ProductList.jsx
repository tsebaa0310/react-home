"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";

const ProductList = async () => {
  let data = await fetch("https://fakestoreapi.com/products");
  let products = await data.json();

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  return (
    <div className="p-5">
      <Slider {...settings}>
        {products.map((product) => (
          <Link
            href={`/products/${product.id}`}
            key={product.id}
            className="card p-4 bg-white shadow-md rounded-lg h-[400px]"
          >
            <div className="w-full h-[250px] relative mb-4 overflow-hidden rounded-lg">
              <Image
                src={product.image}
                fill
                alt={product.title}
                className="object-cover"
              />
            </div>
            <h2 className="my-2 font-semibold text-lg">{product.title}</h2>
            <div className="flex justify-between w-full text-sm text-slate-600">
              <span className="font-medium">{product.category}</span>
              <span className="font-bold text-black">{product.price}$</span>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default ProductList;
