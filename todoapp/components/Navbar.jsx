'use client'
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black p-4 fixed w-full z-10 top-0 left-0">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <p className='text-3xl text-orange-500'>CHECKITO</p>
        </div>
        <div className='hidden md:flex space-x-4'>
          <a href="/" className="text-white px-3 py-2 rounded-md hover:text-orange-600">Home</a>
          <a href="/about" className="text-white px-3 py-2 rounded-md hover:text-orange-600">About</a>
          <a href="/services" className="text-white px-3 py-2 rounded-md hover:text-orange-600">Services</a>
          <a href="/contact" className="text-white px-3 py-2 rounded-md hover:text-orange-600">Contact</a>
        </div>
        <a href="newtodo\app\page.jsx" className="bg-black text-white font-sans transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300 rounded-xl px-2 py-2">Make Your List</a>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black p-4 space-y-4">
          <a href="/" className="text-white block px-3 py-2 rounded-md hover:text-orange-600">Home</a>
          <a href="/about" className="text-white block px-3 py-2 rounded-md hover:text-orange-600">About</a>
          <a href="/services" className="text-white block px-3 py-2 rounded-md hover:text-orange-600">Services</a>
          <a href="/contact" className="text-white block px-3 py-2 rounded-md hover:text-orange-600">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
