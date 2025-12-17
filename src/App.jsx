import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink, Navigate } from 'react-router-dom';
import About from './Pages/About';
import Menu from './Pages/Menu';
import Contact from './Pages/Contact';
import Error from './Pages/Error';
import './index.css';
import Cart from './Pages/Cart';
import ProductDetailpg from "./Pages/ProductDetailpg";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CartProvider, useCart } from './components/CartContext'; // Import useCart

// Move CartIcon outside of App component
function CartIcon() {
  const { cart } = useCart();
  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="relative">
      <NavLink 
        to="/cart" 
        className={({ isActive }) => isActive ? 'text-yellow-500' : 'text-white'}
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

          
          <nav className='flex p-4 bg-gray-800 justify-around items-center gap-6 text-white'>
            <div className='w-10'   >
            <img src="./images/logo.jpg" alt="" />
          </div>

          <div className=' flex gap-5' >

            <NavLink 
              to="/menu" 
              className={({ isActive }) => 
                isActive ? 'text-yellow-400 font-semibold' : 'hover:text-yellow-300 transition-colors'
            }
            >
              Menu
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive ? 'text-yellow-400 font-semibold' : 'hover:text-yellow-300 transition-colors'
            }
            >
              About
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                isActive ? 'text-yellow-400 font-semibold' : 'hover:text-yellow-300 transition-colors'
            }
            >
              Contact

            </NavLink>
       
              </div>

         <div >
            <CartIcon    />
         </div>
          </nav>
          
          <main className="min-h-screen">
            <Routes>
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