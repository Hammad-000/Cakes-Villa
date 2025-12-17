import { useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../components/CartContext";

function ProductDetailpg() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <p className="text-center mt-10">Product not found</p>;
  }

  return (
    <div className="container mx-auto px-4 py-10 grid md:grid-cols-2 gap-8">
      <img
        src={product.image}
        alt={product.name}
        className="w-full rounded-lg"
      />

      <div>
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-2xl font-bold text-blue-600 mb-6">
          ${product.price.toFixed(2)}
        </p>

        <button
          onClick={() => addToCart(product)}
          className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetailpg;
