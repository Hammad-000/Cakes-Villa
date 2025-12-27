import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Components/CartContext';
import { FaTrash, FaPlus, FaMinus, FaArrowLeft } from 'react-icons/fa';

function Cart() {
  const { 
    cart, 
    removeFromCart, 
    incrementQuantity, 
    decrementQuantity, 
    calculateTotalPrice,
    clearCart 
  } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-8">Add some delicious items from our menu!</p>
        <Link 
          to="/menu" 
          className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 gap-3 p-3 to-orange-400 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          <FaArrowLeft />
          Checkout Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-lg shadow-md border">
              <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  <p className="text-sm text-gray-500">Category: {item.categoryTitle}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={() => decrementQuantity(item.id)}
                    className="bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-300"
                  >
                    <FaMinus className="text-sm" />
                  </button>
                  <span className="font-semibold w-8 text-center">{item.quantity}</span>
                  <button 
                    onClick={() => incrementQuantity(item.id)}
                    className="bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-300"
                  >
                    <FaPlus className="text-sm" />
                  </button>
                </div>
                
                <p className="font-semibold text-lg w-20 text-right">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 p-2"
                  title="Remove item"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
        

        <div className="lg:col-span-1">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md sticky top-4">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span>Subtotal ({cart.reduce((total, item) => total + item.quantity, 0)} items)</span>
                <span>${calculateTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span>${calculateTotalPrice().toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <button className="w-full bg-gradient-to-r rounded p-3 from-pink-500 to-orange-400 text-white shadow-md">
                Proceed to Checkout
              </button>
              
              <button 
                onClick={clearCart}
                className="w-full border border-red-500 text-red-500 py-3 rounded-lg hover:bg-red-50 font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <FaTrash />
                Clear Cart
              </button>
              
              <Link 
                to="/menu"
                className="block text-center text-blue-500 hover:text-blue-700 hover:underline py-2"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;