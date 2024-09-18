"use client";

import Image from "next/image";
import React from "react";
import RelatedProducts from "../../../components/RelatedProducts";

const page = async ({ params: { id } }) => {
  let data = await fetch(`https://fakestoreapi.com/products/${id}`);
  let product = await data.json();

  return (
    <div className="mx-auto my-10 max-w-3xl">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="img relative w-full h-[500px] ">
          <Image src={product.image} fill alt={product.title} />
        </div>
        <div className="">
          <h2 className="text-2xl mb-5">{product.title}</h2>
          <p className=" text-slate-600 text-sm">{product.description}</p>
          <hr className="my-10" />
          <div className="flex justify-between mt-5">
            <span>Price:</span>
            <span className="text-2xl font-bold">{product.price} $</span>
          </div>
          <div className="flex justify-between mt-5">
            <span>Review:</span>
            <span className="font-bold">{product.rating.rate}★</span>
          </div>
          <div className="flex justify-between mt-5">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded">
              add to cart
            </button>
            <button className="bg-slate-950 hover:bg-black text-white font-bold py-2 px-8 rounded">
              purchase
            </button>
          </div>
        </div>
      </div>
      <RelatedProducts category={product.category} />
    </div>
  );
};

export default page;
