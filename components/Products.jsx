import Product from "./Product";

async function getProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = response.json();
  return products;
}
const Products = async () => {
  const Products = await getProducts();
  return (
    <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Products.map((product) => {
        return <Product product={product} />;
      })}
    </div>
  );
};

export default Products;
