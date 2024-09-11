import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./nemelt/ProductList";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}

export default App;
