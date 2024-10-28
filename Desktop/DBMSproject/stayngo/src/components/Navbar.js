// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 shadow-md fixed w-full top-0">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white font-bold text-xl">StayNGo</div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-4 text-white">
          <a href="#" className="hover:text-blue-200">Home</a>
          <a href="#" className="hover:text-blue-200">Search</a>
          <a href="#" className="hover:text-blue-200">Listings</a>
          <a href="#" className="hover:text-blue-200">Contact</a>
        </div>

        {/* Login/Signup Button */}
        <div className="text-white">
          <button className="bg-white text-blue-500 px-4 py-1 rounded-md hover:bg-gray-100">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
