import React from "react";
import Image from "next/image";

function ProductDetail({ params }) {
  const { id } = params;

  return (
    <div className="text-center">
      <h2>{product.title}</h2>
      <Image src={product.image} alt={product.title} width={300} height={300} />
      <p>${product.price.toFixed(0)}</p>
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Rating: ★{product.rating.rate}</p>
    </div>
  );
}

export default ProductDetail;
