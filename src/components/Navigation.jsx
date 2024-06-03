import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navigation = () => {
  const { cart } = useCart();

  const cartItemCount = cart.reduce((total, product) => total + product.quantity, 0);

  return (
    <nav className="bg-gray-800 p-4 fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl">
          <Link to="/">Logga</Link>
        </div>
        <ul className="flex space-x-4 text-white">
          <li>
            <Link to="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="hover:text-gray-400">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/cart" className="hover:text-gray-400">
              Shopping Cart ({cartItemCount})
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
