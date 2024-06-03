import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();
  const [editingProductId, setEditingProductId] = useState(null);
  const [newQuantity, setNewQuantity] = useState(1);

  // Beräkna totalpriset för hela varukorgen
  const totalPrice = cart.reduce((total, product) => total + (product.price * product.quantity), 0);

  const handleCheckout = () => {
    navigate('/order-confirmation', { state: { products: cart } });
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
    <div className="container mx-auto mt-20 p-4">
      <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
      {cart.map((product) => (
        <div key={product.id} className="flex items-center justify-between border-b border-gray-300 py-2">
          <div className="flex items-center">
            <div className='w-20 h-24 mr-4 bg-white flex items-center justify-center'>
              <img className='object-contain max-w-full max-h-full p-1' src={product.image} alt={product.title} />
            </div>
            <div>
              <p className="font-semibold">{product.title}</p>
              <p>Price: ${product.price}</p>
              {editingProductId === product.id ? (
                <div className="flex items-center">
                  <input
                    type="number"
                    value={newQuantity}
                    onChange={(e) => setNewQuantity(Number(e.target.value))}
                    className="border border-gray-300 p-1 w-16 text-center"
                    min="1"
                  />
                  <button
                    className="bg-green-500 text-white px-2 ml-2"
                    onClick={() => handleUpdateQuantity(product.id)}
                  >
                    Update
                  </button>
                </div>
              ) : (
                <div className="flex items-center">
                  <p>Quantity: {product.quantity}</p>
                  <button
                    className="bg-blue-500 text-white px-2 ml-2"
                    onClick={() => handleEditQuantity(product.id, product.quantity)}
                  >
                    Edit
                  </button>
                </div>
              )}
              <button
                className="bg-red-500 text-white px-2 mt-2"
                onClick={() => removeFromCart(product.id)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="mt-4">
        <p className="font-semibold">Total Price: ${totalPrice.toFixed(2)}</p>
        <button onClick={handleCheckout} className="bg-blue-500 text-white px-4 py-2 mt-2">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
