import React, { useState } from "react";
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button className="text-white focus:outline-none" onClick={toggleMenu}>
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          ></path>
        </svg>
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-20">
          <Link
            to="/"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Shop
          </Link>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
