import Table from "react-bootstrap/Table";

function ProductList({ products }) {
  const handleAddToCart = (product) => {
    console.log(`Added ${product.title} to the cart.`);
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
              <button onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ProductList;
