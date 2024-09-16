import React from "react";
import Image from "next/image";
import Link from "next/link";

function ProductList({ products, params }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-1 p-4">
      {products.map((item) => (
        <Link href={`/products/${item.id}`} key={item.id} className="card">
          <div
            key={item.id}
            className="h-[450px] w-[260px] bg-white border border-gray-200 shadow-md p-1.5"
          >
            <div className="w-[240px] h-[200px] relative">
              <Image src={item.image} fill alt={item.title} />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <span className="">${item.price.toFixed(0)}</span>
              <div className="flex justify-between items-center mt-2">
                <span className="">{item.category}</span>
                <span className="">★{item.rating.rate}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductList;
