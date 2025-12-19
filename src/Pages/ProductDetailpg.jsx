import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "./components/CartContext";
import { FaPlus, FaMinus, FaShoppingCart } from "react-icons/fa";

function ProductDetailpg() {
  const { id } = useParams();
  const { cart, addToCart, incrementQuantity, decrementQuantity, removeFromCart } = useCart();

  const product = products.find((p) => p.id === Number(id));
  

  const cartItem = cart.find(item => item.id === Number(id));
  const currentQuantity = cartItem ? cartItem.quantity : 0;

  if (!product) {
    return <p className="text-center mt-10">Product not found</p>;
  }

  return (
    <div className="container mx-auto px-4 py-10 max-w-6xl">
      <div className="grid md:grid-cols-2 gap-12">
   
        <div className="flex justify-center items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-md rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
          />
        </div>

  
        <div className="flex flex-col justify-center">
          <div className="mb-6">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
              {product.categoryTitle}
            </span>
            <h1 className="text-4xl font-bold mb-4 text-gray-800">{product.name}</h1>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">{product.description}</p>
            
            <div className="flex items-center mb-8">
              <span className="text-3xl font-bold text-blue-600">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="ml-4 text-xl text-gray-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>

        
          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Quantity</h3>
            
            {currentQuantity === 0 ? (
     
              <button
                onClick={() => addToCart(product)}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 gap-3 p-3 to-orange-400 text-white shadow-md w-full"
              >
                <FaShoppingCart className="text-xl" />
                <span className="text-lg">Add to Cart</span>
              </button>
            ) : (
              // Quantity Controls (when already in cart)
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="flex items-center bg-gray-100 rounded-xl p-2 shadow-inner">
                  <button
                    onClick={() => decrementQuantity(product.id)}
                    disabled={currentQuantity <= 1}
                    className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl font-bold transition-all ${
                      currentQuantity <= 1
                        ? "bg-gray-300 text-gray-400 cursor-not-allowed"
                        : "bg-blue-500 text-white hover:bg-blue-600 active:scale-95"
                    }`}
                  >
                    <FaMinus />
                  </button>
                  
                  <div className="mx-6">
                    <div className="text-4xl font-bold text-gray-800">{currentQuantity}</div>
                    <div className="text-sm text-gray-500 text-center">in cart</div>
                  </div>
                  
                  <button
                    onClick={() => incrementQuantity(product.id)}
                    className="w-12 h-12 rounded-xl bg-blue-500 text-white flex items-center justify-center text-2xl font-bold hover:bg-blue-600 active:scale-95 transition-all"
                  >
                    <FaPlus />
                  </button>
                </div>
                
                <div className="flex flex-col gap-3">
                  <div className="text-2xl font-bold text-green-600">
                    Total: ${(product.price * currentQuantity).toFixed(2)}
                  </div>
                  
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="text-red-500 hover:text-red-700 font-semibold text-sm flex items-center gap-2 transition-colors"
                  >
                    <span>Remove from Cart</span>
                  </button>
                </div>
              </div>
            )}
          </div>

    
          <div className="bg-gray-50 rounded-2xl p-6 mb-8">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Product Details</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-gray-600">Fresh ingredients daily</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-gray-600">Made to order</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-gray-600">Delivery available</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-gray-600">Suitable for special occasions</span>
              </li>
            </ul>
          </div>

 
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-gray-600">In Stock • Ready in 2-4 hours</span>
            </div>
            
            <div className="text-sm text-gray-500">
              Item ID: {product.id}
            </div>
          </div>
        </div>
      </div>

  
      <div className="mt-16 pt-8 border-t border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">You Might Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products
            .filter(p => p.categoryTitle === product.categoryTitle && p.id !== product.id)
            .slice(0, 4)
            .map(relatedProduct => (
              <div key={relatedProduct.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
                <img 
                  src={relatedProduct.image} 
                  alt={relatedProduct.name} 
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
                <h4 className="font-semibold text-gray-800">{relatedProduct.name}</h4>
                <p className="text-blue-600 font-bold">${relatedProduct.price.toFixed(2)}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetailpg;