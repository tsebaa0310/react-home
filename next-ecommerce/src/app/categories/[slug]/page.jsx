import React from "react";
import Link from "next/link";
import Image from "next/image";

const Page = async ({ params: { slug } }) => {
  const data = await fetch(
    `https://fakestoreapi.com/products/category/${slug}`
  );
  const products = await data.json();

  return (
    <>
      <div className="my-5 text-center mt-10">
        <h2 className="text-3xl font-bold">Category: {slug}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 p-5">
        {products.map((product) => (
          <Link
            href={`/products/${product.id}`}
            key={product.id}
            className="flex flex-col justify-between p-4 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105"
          >
            <div className="w-full h-[250px] relative mb-4 overflow-hidden rounded-lg">
              <Image
                src={product.image}
                fill
                alt={product.title}
                className="object-cover"
              />
            </div>
            <h2 className="my-2 font-semibold text-lg text-gray-800 overflow-hidden whitespace-nowrap text-ellipsis">
              {product.title}
            </h2>
            <div className="flex justify-between w-full text-sm text-slate-500">
              <span>{product.category}</span>
              <span className="font-bold text-green-600">{product.price}$</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Page;
