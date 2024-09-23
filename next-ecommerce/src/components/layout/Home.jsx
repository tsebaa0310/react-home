import ProductList from "../ProductList";
import { ShoppingCartProvider } from "../../lib/ShoppingCartContext";
import { Categories } from "../layout/Categories";

export default function Home() {
  return (
    <>
      <div className="mx-auto p-3">
        <Categories />
        <ProductList />
      </div>
    </>
  );
}
