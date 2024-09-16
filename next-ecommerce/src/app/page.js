import ProductList from "./components/ProductList";

export default async function Page() {
  let data = await fetch("https://fakestoreapi.com/products");
  let products = await data.json();

  return (
    <div className="">
      <h3 className="text-center text-xl font-semibold">Product List</h3>
      <ProductList products={products} />
    </div>
  );
}
