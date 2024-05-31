import React from 'react';
import { useLocation } from 'react-router-dom';

const OrderConfirmationPage = () => {
  const location = useLocation();
  const products = location.state?.products || [];

  const totalPrice = products.reduce((total, product) => total + (product.price * product.quantity), 0);

  return (
    <div className="container mx-auto mt-20 p-4">
      <h1 className="text-2xl font-semibold mb-4">Order Confirmation</h1>
      <div>
        {products.map((product) => (
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
      </div>
      <div className="mt-4">
        <p className="font-semibold">Total Price: ${totalPrice}</p>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
