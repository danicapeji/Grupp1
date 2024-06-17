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
    <div className="container mx-auto flex justify-center h-fit mt-20">
      <div className="w-4/5 md:w-3/4 bg-white my-10 p-4 md:p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Thank you for your order!
        </h1>
        <div>
          {products.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between border-b border-gray-300 py-2"
            >
              <div className="flex items-center">
                <div className="w-20 mr-4 bg-white flex items-center justify-center">
                  <img
                    className="object-contain max-w-full max-h-full p-1"
                    src={product.image}
                    alt={product.title}
                  />
                </div>
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
        <div className="flex flex-col md:flex-row justify-center items-center mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-2 md:mb-0 md:mr-2">
            <Link to="/">Go Home</Link>
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            <Link to="/shop">Continue shopping</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
