import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const OrderConfirmationPage = () => {
  const location = useLocation();
  const products = location.state?.products || [];

  const totalPrice = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div className="container mx-auto flex justify-center text-center items-center">
      <div className="container w-15 bg-slate-500 mt-20 p-4">
        <h1 className="text-2xl font-semibold mb-4">
          Your order has been confirmed
        </h1>
        <div>
          {products.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between border-b border-gray-300 py-2"
            >
              <div className="flex items-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-16 h-16 mr-4"
                />
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
        <b>Thank you for shopping at Bali Espress!</b>
        <div className="container flex flex-col md:flex-row justify-center items-center">
          <button className="mt-4 bg-blue-500 text-white px-2 ml-2">
            <Link to="/" className="hover:text-gray-400">
              Go Home
            </Link>
          </button>
          <button className="mt-4 bg-blue-500 text-white px-2 ml-2">
            <Link to="/shop" className="hover:text-gray-400">
              Continiue shopping
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
