import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink, Navigate ,Link } from 'react-router-dom';
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


function CartIcon() {
  const { cart } = useCart();
  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="relative">
      <NavLink 
        to="/cart" 
        className={({ isActive }) => isActive ? 'text-gray-700 hover:text-pink-600 font-medium' : 'hover:text-orange-500 transition-colors'}
      >
        <MdOutlineShoppingCart className="text-2xl" />
      </NavLink>
      {cartItemsCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {cartItemsCount}
        </span>
      )}
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <Router  >
        <div className=' gap-10 justify-evenly'  >

          
          <nav className='flex p-4 justify-around items-center gap-6 '>
          
           <div className="flex items-center space-x-2">
  <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full overflow-hidden">
    <img src="./images/logo.jpg" alt="CakeVilla Logo" className="w-full h-full object-cover" />
  </div>
  <span className="text-2xl font-bold text-gray-800">Cake<span className="text-pink-500">Villa</span></span>
</div>
            
          

          <div className=' flex gap-5' >
  <nav className="hidden md:flex space-x-8">
            
          </nav>
            <NavLink 
              to="/home" 
              className={({ isActive }) => 
                isActive ? 'text-gray-700 hover:text-pink-600 font-medium' : 'hover:text-orange-500 transition-colors'
            }
            >
              Home
            </NavLink>
            <NavLink 
              to="/menu" 
              className={({ isActive }) => 
                isActive ? 'text-gray-700 hover:text-pink-600 font-medium' : 'hover:text-orange-500 transition-colors'
            }
            >
              Menu
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive ? 'text-gray-700 hover:text-pink-600 font-medium' : 'hover:text-orange-500 transition-colors'
            }
            >
              About
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                isActive ? 'text-gray-700 hover:text-pink-600 font-medium' : 'hover:text-orange-500 transition-colors'
            }
            >
              Contact

            </NavLink>
       
              </div>
              

         <div className='flex items-center space-x-2 ' >
         <Link 
            to="/menu" 
            className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-pink-200 transition-all duration-300"
          >
            Order Now
          </Link>
            <CartIcon    />
         </div>
          </nav>
          
          <main className="min-h-screen">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/product/:id" element={<ProductDetailpg />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/" element={<Navigate to="/menu" />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </main>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;