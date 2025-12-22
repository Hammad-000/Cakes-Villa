import { Link } from "react-router-dom";
import { useCart } from "../components/CartContext";
import { GiCakeSlice } from "react-icons/gi";


function ProductsCart({ filteredProducts }) {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map((product) => (
        <div key={product.id} className="bg-white shadow  rounded-lg p-5 min-w-3/5">
          
          {/* Navigate to product detail */}
          <Link to={`/product/${product.id}`}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover "
            />
            <h3 className="text-lg font-semibold mt-2">
              {product.name}
            </h3>
          </Link>

          <p className="text-gray-600">${product.price.toFixed(2)}</p>

          {/* Add to cart */}
          <button
            onClick={() => addToCart(product)}
            className=" bg-gradient-to-r from-pink-500 to-orange-400 gap-2 cursor-pointer text-white px-5 py-3 rounded font-semibold text-lg hover:shadow-xl  w-full hover:shadow-pink-200 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
          >
           Order Now  <GiCakeSlice />

          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductsCart;
