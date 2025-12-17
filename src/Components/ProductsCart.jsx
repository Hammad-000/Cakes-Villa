import { Link } from "react-router-dom";
import { useCart } from "../components/CartContext";

function ProductsCart({ filteredProducts }) {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map((product) => (
        <div key={product.id} className="bg-white shadow rounded-lg p-4">
          
          {/* Navigate to product detail */}
          <Link to={`/product/${product.id}`}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="text-lg font-semibold mt-2">
              {product.name}
            </h3>
          </Link>

          <p className="text-gray-600">${product.price.toFixed(2)}</p>

          {/* Add to cart */}
          <button
            onClick={() => addToCart(product)}
            className="mt-3 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductsCart;
