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
        <span className="absolute -top-2 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {cartItemsCount}
        </span>
      )}
    </div>
  );
}


function App() {
  return (
    <Router>
      <div className=''>
        <nav className='flex p-2 bg-gray-400 justify-center gap-4'>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/cart">Cart</NavLink>
        </nav>
        

        <Routes>
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductDetailpg />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Navigate to="/menu" />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <div>
      </div>
    </Router>
  );
}

export default App;