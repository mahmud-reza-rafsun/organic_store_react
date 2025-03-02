import { useEffect, useState } from "react";
import Products from "../Products/Products";

const Product = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("product_details.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [setProduct]);
  return (
    <div>
      {
        <div>
          <div className="pt-10 text-center">
            <h2 className="font-semibold text-xl">Our Product</h2>
          </div>
          <div className="max-w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-8">
            {product.map((products) => (
              <Products key={products.id} products={products} />
            ))}
          </div>
        </div>
      }
    </div>
  );
};

export default Product;
