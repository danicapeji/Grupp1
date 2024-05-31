import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  // Beräkna totalpriset för hela varukorgen
  const totalPrice = cart.reduce((total, product) => total + (product.price * product.quantity), 0);

  const handleCheckout = () => {
    navigate('/order-confirmation', { state: { products: cart } });
  };

  return (
    <div className="container mx-auto mt-20 p-4">
      <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
      {cart.map((product) => (
        <div key={product.id} className="flex items-center justify-between border-b border-gray-300 py-2">
          <div className="flex items-center">
            <img src={product.image} alt={product.title} className="w-16 h-16 mr-4" />
            <div>
              <p className="font-semibold">{product.title}</p>
              <p>Price: ${product.price}</p>
              <p>Quantity: {product.quantity}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="mt-4">
        <p className="font-semibold">Total Price: ${totalPrice}</p>
        <button onClick={handleCheckout} className="bg-blue-500 text-white px-4 py-2 mt-2">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
