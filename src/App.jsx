import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink, Navigate, Link } from 'react-router-dom';
import About from './Pages/About';
import Menu from './Pages/Menu';
import Contact from './Pages/Contact';
import Error from './Pages/Error';
import Home from './Pages/Home';
import './index.css';
import Cart from './Pages/Cart';
import ProductDetailpg from "./Pages/ProductDetailpg";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CartProvider, useCart } from './components/CartContext';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import { GiCakeSlice } from "react-icons/gi";
import FooterContent from './components/FooterContent';



function CartIcon() {
  const { cart } = useCart();
  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="relative">
      <NavLink 
        to="/cart" 
        className={({ isActive }) => 
          isActive 
            ? 'flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 text-white shadow-md' 
            : 'flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors'
        }
      >
        <MdOutlineShoppingCart className="text-xl" />
        {cartItemsCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {cartItemsCount}
          </span>
        )}
      </NavLink>
    </div>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-rose-50 to-orange-50">
          {/* Navigation */}
          <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                
                {/* Logo/Brand */}
                <Link to="/home" className="flex items-center space-x-3 group">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-pink-200 group-hover:border-pink-400 transition-colors">
                    <img 
                      src="./images/logo.jpg" 
                      alt="CakeVilla Logo" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-800">Cake<span className="text-pink-500">Villa</span></h1>
                    <p className="text-xs text-gray-500 hidden sm:block">Sweet Delights Since 2023</p>
                  </div>
                </Link>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center space-x-8">
                  <NavLink 
                    to="/home" 
                    className={({ isActive }) => 
                      `px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-r from-pink-500 to-orange-400 text-white shadow-md' 
                          : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50'
                      }`
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink 
                    to="/menu" 
                    className={({ isActive }) => 
                      `px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-r from-pink-500 to-orange-400 text-white shadow-md' 
                          : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50'
                      }`
                    }
                  >
                    Menu
                  </NavLink>
                  <NavLink 
                    to="/about" 
                    className={({ isActive }) => 
                      `px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-r from-pink-500 to-orange-400 text-white shadow-md' 
                          : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50'
                      }`
                    }
                  >
                    About
                  </NavLink>
                  <NavLink 
                    to="/contact" 
                    className={({ isActive }) => 
                      `px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-r from-pink-500 to-orange-400 text-white shadow-md' 
                          : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50'
                      }`
                    }
                  >
                    Contact
                  </NavLink>
                </div>

                {/* Right Side Buttons */}
               <div className="flex items-center space-x-4">
  <Link 
    to="/menu" 
    className="hidden md:flex items-center gap-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-pink-200 transition-all duration-300 hover:scale-105"
  >
    Order Now
    <GiCakeSlice className="text-lg" />
  </Link>
  
  <CartIcon />
  
  {/* Mobile Menu Button */}
  <button 
    className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
    onClick={() => setIsMenuOpen(!isMenuOpen)}
  >
    {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
  </button>
</div>
              </div>

              {/* Mobile Menu */}
              {isMenuOpen && (
                <div className="md:hidden mt-4 py-4 border-t border-gray-200 animate-fadeIn">
                  <div className="flex flex-col space-y-3">
                    <NavLink 
                      to="/home" 
                      className={({ isActive }) => 
                        `px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                          isActive 
                            ? 'bg-gradient-to-r from-pink-500 to-orange-400 text-white shadow-md' 
                            : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50'
                        }`
                      }
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home
                    </NavLink>
                    <NavLink 
                      to="/menu" 
                      className={({ isActive }) => 
                        `px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                          isActive 
                            ? 'bg-gradient-to-r from-pink-500 to-orange-400 text-white shadow-md' 
                            : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50'
                        }`
                      }
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Menu
                    </NavLink>
                    <NavLink 
                      to="/about" 
                      className={({ isActive }) => 
                        `px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                          isActive 
                            ? 'bg-gradient-to-r from-pink-500 to-orange-400 text-white shadow-md' 
                            : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50'
                        }`
                      }
                      onClick={() => setIsMenuOpen(false)}
                    >
                      About
                    </NavLink>
                    <NavLink 
                      to="/contact" 
                      className={({ isActive }) => 
                        `px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                          isActive 
                            ? 'bg-gradient-to-r from-pink-500 to-orange-400 text-white shadow-md' 
                            : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50'
                        }`
                      }
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact
                    </NavLink>
                    <Link 
                      to="/menu" 
                      className="md:hidden bg-gradient-to-r from-pink-500 to-orange-400 text-white px-6 py-3 rounded-full font-semibold text-center hover:shadow-lg hover:shadow-pink-200 transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Order Now
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>
         
        


          <div className="container mx-auto px-4">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/product/:id" element={<ProductDetailpg />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="*" element={<Error />} />
            </Routes>
          <FooterContent />
          </div>

         
   

        </div>
      </Router>
    </CartProvider>
  );
}

export default App;