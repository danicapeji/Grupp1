import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import HamburgerMenu from "./HamburgerMenu";

const Navigation = () => {
  const { cart } = useCart();

  const cartItemCount = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  return (
    <nav className="bg-gray-800 p-4 fixed w-full top-0 z-10">
      <div className="container mx-auto flex md:justify-between items-center">
        {/* Logga synlig i desktop, dold i mobil */}
        <div className="hidden md:block text-white text-2xl">
          <Link to="/" className="hover:text-gray-400">
            CSTORE
          </Link>
        </div>
        <div className="hidden md:flex space-x-4 text-white">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/shop" className="hover:text-gray-400">
            Shop
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/cart"
            className="hover:text-gray-400 flex items-center text-white"
          >
            <FontAwesomeIcon icon={faCartShopping} className="mr-2" />(
            {cartItemCount})
          </Link>
        </div>
        {/* Hamburgermenyn och logga synliga i mobil */}
        <div className="md:hidden flex items-center justify-between w-full">
          <div className="flex items-center">
            <HamburgerMenu />
          </div>
          <div className="text-white text-2xl flex-grow text-center">
            <Link to="/" className="hover:text-gray-400">
              CSTORE
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              to="/cart"
              className="hover:text-gray-400 flex items-center text-white"
            >
              <FontAwesomeIcon icon={faCartShopping} className="mr-2" />(
              {cartItemCount})
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
