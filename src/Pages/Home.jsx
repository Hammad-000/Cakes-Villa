import { Link } from 'react-router-dom';
import { FaArrowRight, FaStar, FaClock, FaTruck, FaShieldAlt } from 'react-icons/fa';
import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-orange-50 overflow-hidden">
      {/* Header/Navigation */}
     

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

          <div className="lg:w-1/2 relative">
            <div className="relative z-10">
              <img 
                src="./images/cake1.jpg" 
                alt="Delicious chocolate cake" 
                className="rounded-3xl shadow-2xl w-full max-w-lg mx-auto transform rotate-3 hover:rotate-0 transition-transform duration-500"
              />
              
      
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-200 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-pink-200 rounded-full opacity-20 animate-pulse delay-300"></div>
              

              <div className="absolute -right-4 top-1/4 bg-white p-4 rounded-2xl shadow-xl transform -translate-y-1/2">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-3 rounded-full">
                    <FaClock className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">Fresh Daily</div>
                    <div className="text-sm text-gray-600">Made with love</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

   
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


      <div className="container mx-auto px-4 pb-16">
        <div className="bg-gradient-to-r from-pink-500 to-orange-400 rounded-3xl p-8 md:p-12 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <FaStar className="text-yellow-300 text-3xl mx-auto mb-4" />
            <p className="text-2xl italic mb-6">
              "The most amazing desserts I've ever tasted! Every bite is pure happiness."
            </p>
            <div className="font-semibold">- Sarah Johnson, Food Blogger</div>
          </div>
        </div>
      </div>

 
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </div>
  );
}

export default Home;