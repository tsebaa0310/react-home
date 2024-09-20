import ProductList from "../components/ProductList";
import { Categories } from "../components/layout/Categories";

export default function Page() {
  return (
    <>
      <div className="mx-auto p-3">
        <Categories />
        <ProductList />
      </div>
    </>
  );
}
