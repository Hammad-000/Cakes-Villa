import { Link } from 'react-router-dom';
import { FaArrowRight, FaStar, FaClock, FaTruck, FaShieldAlt, FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaHeart, FaShoppingCart, FaLeaf, FaUserFriends, FaAward, FaRegCalendarCheck } from 'react-icons/fa';
import { GiCakeSlice, GiChocolateBar, GiCupcake } from 'react-icons/gi';
import { MdLocalShipping, MdSupportAgent } from 'react-icons/md';
import { IoIosRibbon } from 'react-icons/io';
import React, { useState } from "react";

function Home() {
  const [email, setEmail] = useState('');

  const featuredDesserts = [
    { id: 1, name: "Chocolate Lava Cake", category: "Cakes", price: "$24.99", rating: 4.9, icon: <GiCakeSlice /> },
    { id: 2, name: "Red Velvet Cupcakes", category: "Cupcakes", price: "$18.99", rating: 4.8, icon: <GiCupcake /> },
    { id: 3, name: "Artisan Brownies", category: "Brownies", price: "$22.99", rating: 4.7, icon: <GiChocolateBar /> },
    { id: 4, name: "Macaron Assortment", category: "French", price: "$29.99", rating: 5.0, icon: <IoIosRibbon /> }
  ];

  const testimonials = [
    { id: 1, name: "Alex Thompson", role: "Food Critic", text: "Absolutely divine! The best desserts in town.", rating: 5 },
    { id: 2, name: "Maria Garcia", role: "Wedding Planner", text: "Perfect for our events. Clients always ask for their contact!", rating: 5 },
    { id: 3, name: "David Chen", role: "Regular Customer", text: "Fresh ingredients and amazing service. My weekly treat!", rating: 4.8 }
  ];


  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with: ${email}`);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-orange-50 overflow-hidden">
    
    

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8 animate-fadeIn">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium">
                <FaStar className="mr-2" /> Premium Quality Desserts
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
                Indulge in <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">Heavenly</span> Dessert Experiences
              </h1>
              
              <p className="text-gray-600 text-lg md:text-xl max-w-2xl">
                Handcrafted with love and the finest ingredients. Every bite tells a story of passion and perfection.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 py-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">500+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">50+</div>
                <div className="text-gray-600">Dessert Varieties</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-500">24/7</div>
                <div className="text-gray-600">Delivery</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/menu"
                className="group bg-gradient-to-r from-pink-500 to-orange-400 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl hover:shadow-pink-200 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
              >
                Explore Our Menu
                <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              
              <Link
                to="/about"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-semibold text-lg hover:border-pink-400 hover:text-pink-600 transition-all duration-300"
              >
                Our Story
              </Link>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10">
              <img 
                src="./images/cake1.jpg" 
                alt="Delicious chocolate cake" 
                className="rounded-3xl shadow-2xl w-full max-w-lg mx-auto transform rotate-3 hover:rotate-0 transition-transform duration-500"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-6 -left-5 w-32 h-32 bg-orange-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute  -right-6 w-40 h-40 bg-pink-400 rounded-full opacity-20 animate-pulse delay-300"></div>
              <div className="absolute -bottom-4 -right-30 w-40 h-40 bg-pink-400 rounded-full opacity-20 animate-pulse delay-300"></div>
              
          
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <FaTruck className="text-pink-600 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Free Delivery</h3>
            <p className="text-gray-600">Free delivery on all orders above $25. Fast and reliable service.</p>
          </div>
          
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <FaShieldAlt className="text-orange-600 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Quality Guaranteed</h3>
            <p className="text-gray-600">We use only the finest ingredients. Your satisfaction is our priority.</p>
          </div>
          
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <FaStar className="text-yellow-600 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Custom Orders</h3>
            <p className="text-gray-600">Special occasions? We create custom desserts just for you.</p>
          </div>
        </div>
      </section>

      {/* Featured Desserts Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Desserts</h2>
          <p className="text-gray-600 text-lg">Handpicked favorites that never disappoint</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredDesserts.map((dessert) => (
            <div key={dessert.id} className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl text-pink-500 mb-4">{dessert.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{dessert.name}</h3>
              <p className="text-gray-500 text-sm mb-4">{dessert.category}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-pink-600">{dessert.price}</span>
                <div className="flex items-center">
                  <FaStar className="text-yellow-500 mr-1" />
                  <span className="font-semibold">{dessert.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-r from-pink-50 to-orange-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 text-lg">Join thousands of happy dessert lovers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < Math.floor(testimonial.rating) ? "text-yellow-500" : "text-gray-300"} />
                  ))}
                  <span className="ml-2 text-gray-700 font-semibold">{testimonial.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="bg-gradient-to-r from-pink-500 to-orange-400 rounded-3xl p-8 md:p-12 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <FaStar className="text-yellow-300 text-3xl mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Sweet Updates</h2>
            <p className="mb-6 text-lg">Subscribe to get exclusive offers, new dessert alerts, and sweet inspiration!</p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-grow px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                required
              />
              <button type="submit" className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
                Subscribe
              </button>
            </form>
            
            <p className="text-sm mt-4 opacity-90">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>

  


      {/* Additional Features */}
      <section className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 text-center p-6 bg-gradient-to-r from-pink-500 to-orange-400 rounded-2xl ">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MdLocalShipping className=" text-3xl" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Nationwide Shipping</h3>
              <p className="text-gray-600">Fresh desserts delivered anywhere</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-r from-pink-500 to-orange-400 rounded-2xl">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MdSupportAgent className="text-3xl" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2 ">24/7 Support</h3>
              <p className="text-gray-600">We're here whenever you need us</p>
            </div>
            
            <div className="text-center p-6 text-center p-6 bg-gradient-to-r from-pink-500 to-orange-400   rounded-2xl">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUserFriends className=" text-3xl" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Loyalty Program</h3>
              <p className="text-gray-600 ">Earn rewards with every purchase</p>
            </div>
            
            <div className="text-center p-6  text-center p-6 bg-gradient-to-r from-pink-500 to-orange-400 rounded-2xl">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaAward className=" text-3xl" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Award Winning</h3>
              <p className="text-gray-600">Recognized excellence since 2015</p>
            </div>
          </div>
        </div>
      </section>

      
     


    </div>
  );
}

export default Home;