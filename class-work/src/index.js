import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//  App() {
//   const [cart] = useState([
//     { id: 1, name: "Apple", quantity: 5 },
//     { id: 2, name: "Banana", quantity: 2 },
//     { id: 3, name: "Strawberry", quantity: 7 },
//   ]);

//   const stock = {
//     1: 10, // Apple-ийн нөөц
//     2: 5,  // Banana-ийн нөөц
//     3: 8   // Strawberry-ийн нөөц
//   };

//   const isOutOfStock = cart.some(item => item.quantity > stock[item.id]);

//   return (
//     <div>
//       {isOutOfStock ? <p>Нөөц дууссан</p> : <p>Бүх зүйл нөөцтэй</p>}
//     </div>
//   );
// }

// export default App;
