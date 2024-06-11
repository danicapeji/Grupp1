import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg h-full flex flex-col justify-between transition-transform transform">
      <Link className="hover:opacity-80" to={`/product/${product.id}`}>
        <div className="w-full h-60 lg:h-72 bg-white flex items-center justify-center rounded-t-lg overflow-hidden">
          <img className="object-contain max-w-full max-h-full p-2" src={product.image} alt={product.title} />
        </div>
      </Link>
      <div className="mt-4 flex-grow flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold">{product.title}</h2>
          <p className="text-gray-500">${product.price}</p>
        </div>
        <div className="mt-4 flex flex-col md:flex-row items-center md:justify-between space-y-2 md:space-y-0 w-full">
          <div className="flex items-center w-full md:w-auto">
            <button
              onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
              className="border rounded-l px-2 py-1 text-sm bg-gray-200 hover:bg-gray-300"
            >
              -
            </button>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="border w-12 text-center bg-white py-1 text-sm mx-1"
              min="1"
            />
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="border rounded-r px-2 py-1 text-sm bg-gray-200 hover:bg-gray-300"
            >
              +
            </button>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full md:w-auto"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
