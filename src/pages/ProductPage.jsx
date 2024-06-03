import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "../api";
import { useCart } from "../context/CartContext";

const ProductPage = ({ onAddToCart }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const { id } = useParams();
  const {
    data: product,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="flex flex-col md:flex-row w-full p-4 mt-20">
      <div className='w-full h-[32rem] bg-white flex items-center justify-center'>
          <img className='object-contain max-w-full max-h-full p-4' src={product.image} alt={product.title} />
        </div>
      <div className='p-4'>
        <h1>{product.title}</h1>
        <p>${product.price}</p>
        <p>{product.description}</p>
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
      </div>
    </div>
  );
};
export default ProductPage;
