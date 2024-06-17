import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart(); // Add clearCart
  const navigate = useNavigate();
  const [editingProductId, setEditingProductId] = useState(null);
  const [newQuantity, setNewQuantity] = useState(1);

  // Calculate the total price of the entire shopping cart
  const totalPrice = cart.reduce((total, product) => total + (product.price * product.quantity), 0);

  const handleCheckout = () => {
    navigate('/order-confirmation', { state: { products: cart } });
    clearCart(); // Clear the cart after navigating
  };

  const handleEditQuantity = (productId, quantity) => {
    setEditingProductId(productId);
    setNewQuantity(quantity);
  };

  const handleUpdateQuantity = (productId) => {
    if (newQuantity > 0) {
      updateQuantity(productId, newQuantity);
      setEditingProductId(null);
    }
  };

  return (
    <div className="container flex mx-auto justify-center mt-20 h-fit">
      {cart.length === 0 ? (
        <div>
        <p>Your cart is empty</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-6">
            <Link to="/shop">
              Back to shop
            </Link>
          </button>
        </div>
        ) : (
          <div className="w-4/5 md:w-3/4 bg-white mt-20 p-4 md:p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold mb-4 text-center">Shopping Cart</h1>
          {cart.map((product) => (
            <div key={product.id} className="border-b border-gray-300 py-2">
              <div className="flex justify-items-start">
                <div className='w-20 h-24 mr-4 bg-white flex items-center justify-center'>
                  <img className='object-contain max-w-full max-h-full p-1' src={product.image} alt={product.title} />
                </div>
                <div>
                  <p className="font-semibold">{product.title}</p>
                  <p>Price: ${product.price}</p>
                  {editingProductId === product.id ? (
                    <div className="flex">
                      <button
                      onClick={() => setNewQuantity(newQuantity > 1 ? newQuantity - 1 : 1)}
                      className="border rounded-l px-2 py-1 text-sm bg-gray-200 hover:bg-gray-300"
                      >
                        -
                      </button>
                      <input
                      type="number"
                      value={newQuantity}
                      onChange={(e) => setNewQuantity(parseInt(e.target.value))}
                      className="border w-12 text-center bg-white py-1 text-sm"
                      min="1"
                      />
                      <button
                      onClick={() => seNewtQuantity(newQuantity + 1)}
                      className="border rounded-r px-2 py-1 text-sm bg-gray-200 hover:bg-gray-300"
                      >
                        +
                      </button>
                      <button
                        className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 ml-2 rounded"
                        onClick={() => handleUpdateQuantity(product.id)}
                      >
                        Update
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <p>Quantity: {product.quantity}</p>
                      <button
                        className="rounded bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 ml-2"
                        onClick={() => handleEditQuantity(product.id, product.quantity)}
                      >
                        Edit
                      </button>
                    </div>
                  )}
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 mt-2 rounded"
                    onClick={() => removeFromCart(product.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-4 text-center">
            <p className="font-semibold">Total Price: ${totalPrice.toFixed(2)}</p>
            <button onClick={handleCheckout} className="rounded bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-2">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;