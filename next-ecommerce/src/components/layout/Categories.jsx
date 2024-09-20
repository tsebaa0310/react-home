"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export function Categories() {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    async function fetchCategories() {
      const res = await fetch("https://fakestoreapi.com/products/categories");
      const data = await res.json();
      setCategories(data);
    }
    fetchCategories();
  }, []);

  if (!categories) return <div className="text-center p-4">Loading...</div>;

  return (
    <div className="text-center p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Categories:</h2>
      <div className="flex justify-center items-center space-x-4 overflow-x-auto">
        {categories.map((cat) => (
          <Link
            href={`/categories/${cat}`}
            key={cat}
            className="relative p-3 mb-10 rounded-md focus:outline-none shadow-lg transition-transform transform hover:scale-105"
          >
            <Image
              src={`/${cat}.png`}
              alt={`${cat} Image`}
              width={200}
              height={200}
              className="object-contain h-[100px] mb-2"
            />
            <p className="font-medium">{cat}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
