import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div>
      <Link to={`/product/${product.id}`}>
        <div className="w-full h-60 md:h-96 lg:h-[32rem] bg-white flex items-center justify-center">
          <img
            className="object-contain max-w-full max-h-full p-4"
            src={product.image}
            alt={product.title}
          />
        </div>
      </Link>
      <div className="mt-2">
        <h2 className="text-lg font-semibold">{product.title}</h2>
        <p className="text-gray-700">${product.price}</p>
        <Link to={`/product/${product.id}`} className="text-blue-500 hover:underline">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
