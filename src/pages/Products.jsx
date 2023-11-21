import ProductCard from "@/components/Product/ProductCard";
import { useLoadProducts } from "../hooks/useLoadProducts";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const ProductsPage = () => {
  const { fetchProducts } = useLoadProducts();

  useEffect(() => {
    fetchProducts();
  }, []);

  const products = useSelector((state) => state.products.items);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <h2 className="col-span-2 lg:col-span-4 text-center">Products</h2>
      {/* {isPending && <p>Loading...</p>} */}
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      {/* {isError && <p>{error}</p>} */}
    </div>
  );
};

export default ProductsPage;
