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
    <div className='p-4'>
      <Link to={`/product/${product.id}`}>
        <div className='w-full h-60 md:h-96 lg:h-[32rem] bg-white flex items-center justify-center'>
          <img className='object-contain max-w-full max-h-full p-4' src={product.image} alt={product.title} />
        </div>
      </Link>
      <div>
        <h2>{product.title}</h2>
        <p>${product.price}</p>
        <div className="flex items-center">
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="border w-12 text-center mr-2 bg-white"
            min="1"
          />
          <button onClick={handleAddToCart} className="bg-blue-500 text-white px-2 py-1">
            Add to Cart
          </button>
        </div>
        <Link to={`/product/${product.id}`}>View Details</Link>
      </div>
    </div>
  );
};

export default ProductCard;