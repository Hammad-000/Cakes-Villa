import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Components/CartContext';
import { FaTrash, FaPlus, FaMinus, FaArrowLeft, FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCreditCard } from 'react-icons/fa';

function Cart() {
  const { 
    cart, 
    removeFromCart, 
    incrementQuantity, 
    decrementQuantity, 
    calculateTotalPrice,
    clearCart 
  } = useCart();

  const [customerDetails, setCustomerDetails] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    paymentMethod: 'credit-card',
    specialInstructions: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    // Here you would typically send the order to your backend
    console.log('Order submitted:', { 
      customerDetails, 
      cartItems: cart, 
      total: calculateTotalPrice() 
    });
    alert('Order submitted successfully!');
    clearCart();
  };

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-8">Add some delicious items from our menu!</p>
        <Link 
          to="/menu" 
          className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all"
        >
          <FaArrowLeft />
          Browse Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <FaUser className="text-pink-500" />
              Customer Details
            </h2>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={customerDetails.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={customerDetails.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <FaPhone className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={customerDetails.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={customerDetails.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Enter your city"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Delivery Address *
                </label>
                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    name="address"
                    value={customerDetails.address}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Street address, apartment, suite, etc."
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={customerDetails.zipCode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="12345"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Payment Method
                  </label>
                  <div className="relative">
                    <FaCreditCard className="absolute left-3 top-3 text-gray-400" />
                    <select
                      name="paymentMethod"
                      value={customerDetails.paymentMethod}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    >
                      <option value="credit-card">Credit Card</option>
                      <option value="debit-card">Debit Card</option>
                      <option value="easy-paisa">Easy Paisa</option>
                      <option value="cash">Cash on Delivery</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Special Instructions (Optional)
                </label>
                <textarea
                  name="specialInstructions"
                  value={customerDetails.specialInstructions}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Any special requests, dietary restrictions, or delivery instructions..."
                />
              </div>
            </form>
          </div>
          
          {/* Cart Items */}
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h2 className="text-2xl font-bold mb-6">Your Order</h2>
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between p-4 rounded-lg border">
                  <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <p className="text-gray-600">${item.price.toFixed(2)}</p>
                      <p className="text-sm text-gray-500">{item.categoryTitle}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => decrementQuantity(item.id)}
                        className="bg-gray-100 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-200"
                      >
                        <FaMinus className="text-sm" />
                      </button>
                      <span className="font-semibold w-8 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => incrementQuantity(item.id)}
                        className="bg-gray-100 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-200"
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
          </div>
        </div>
        
        {/* Right Column - Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-b from-gray-50 to-white p-6 rounded-lg shadow-md sticky top-4">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal ({cart.reduce((total, item) => total + item.quantity, 0)} items)</span>
                <span className="font-medium">${calculateTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery Fee</span>
                <span className="text-green-600 font-medium">$2.99</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span className="font-medium">${(calculateTotalPrice() * 0.08).toFixed(2)}</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span className="text-pink-600">
                    ${(calculateTotalPrice() + 2.99 + (calculateTotalPrice() * 0.08)).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <button 
                onClick={handleSubmitOrder}
                className="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white py-3 rounded-lg hover:opacity-90 transition-all font-semibold shadow-lg"
              >
                Place Order
              </button>
              
              <div className="text-center text-sm text-gray-500">
                <p>By placing your order, you agree to our</p>
                <Link to="/terms" className="text-pink-500 hover:underline">Terms & Conditions</Link>
              </div>
              
              <button 
                onClick={clearCart}
                className="w-full border border-red-500 text-red-500 py-3 rounded-lg hover:bg-red-50 font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <FaTrash />
                Clear Cart
              </button>
              
              <Link 
                to="/menu"
                className="block text-center text-pink-500 hover:text-pink-700 hover:underline py-2 font-medium"
              >
                Back to Menu 
              </Link>
            </div>
            
            {/* Order Info */}
            <div className="mt-8 pt-6 border-t">
              <h3 className="font-semibold mb-3">Delivery Information</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-pink-500" />
                  Estimated delivery: 30-45 minutes
                </p>
                <p>• Free delivery on orders over $25</p>
                <p>• Contact-free delivery available</p>
                <p>• Real-time order tracking</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;