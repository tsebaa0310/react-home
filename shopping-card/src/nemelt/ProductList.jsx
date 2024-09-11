import React, { useState, useEffect } from "react";
import { useCart } from "./CartContext";
import Table from "react-bootstrap/Table";

function ProductList() {
  const [products, setProducts] = useState([]);
  const { dispatch } = useCart();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        const first10Products = data.products.slice(0, 10);
        setProducts(first10Products);
      });
  }, []);

  const addToCart = (product) => {
    dispatch({ type: "ADD_ITEM", payload: product });
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Price</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>${product.price}</td>
            <td>{product.category}</td>
            <td>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ProductList;
