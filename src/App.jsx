import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink, Navigate } from 'react-router-dom';
import About from './Pages/About';
import Menu from './Pages/Menu';
import Contact from './Pages/Contact';
import Error from './Pages/Error';
import './index.css';

function App() {
  return (
    <Router>
      <div className=''>
        <nav className='flex p-2 bg-gray-400 justify-center gap-4'>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        

        <Routes>
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
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
