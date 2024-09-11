import React from "react";
import "./App.css";
import { CartProvider } from "./nemelt/CartContext";
import ProductList from "./nemelt/ProductList";
import Cart from "./nemelt/Cart";

const App = () => {
  return (
    <CartProvider>
      <div className="container">
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;
