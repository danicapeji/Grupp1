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
    <div className='p-4 bg-white rounded-lg shadow-lg h-full flex flex-col justify-between'>
      <Link className='hover:opacity-70' to={`/product/${product.id}`}>
        <div className='w-full h-60 lg:h-[32rem] bg-white flex items-center justify-center'>
          <img className='object-contain max-w-full max-h-full p-2' src={product.image} alt={product.title} />
        </div>
      </Link>
      <div>
        <h2>{product.title}</h2>
        <p>${product.price}</p>
      </div>
      <div className="flex items-center flex-col md:flex-row justify-between">
        <div>
          <button onClick={() => setQuantity(quantity - 1)} className="border w-6 text-center bg-white p-1">
            -
          </button>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="border w-10 text-center bg-white p-1"
            min="1"
          />
          <button onClick={() => setQuantity(quantity + 1)} className="border w-6 text-center bg-white p-1">
            +
          </button>
        </div>
        <button onClick={handleAddToCart} className="bg-blue-500 text-white px-2 py-1">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
