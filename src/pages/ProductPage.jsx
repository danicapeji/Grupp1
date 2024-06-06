import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "../api";
import { useCart } from "../context/CartContext";

const ProductPage = () => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  const {
    data: product,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
  });

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto p-6 mt-8">
      <div className="flex text-black mb-4">
        <Link to="/">Home</Link>
        <span>&nbsp;/&nbsp;</span>
        <Link to="/shop">Shop</Link>
        <span>&nbsp;/&nbsp;</span>
        <span>{product.title}</span>
      </div>

      <div className="flex flex-col md:flex-row p-4 bg-white rounded-lg shadow-lg">
        <div className="w-full md:w-1/2 flex items-center justify-center p-4">
          <img
            className="object-contain max-w-full max-h-[500px]"
            src={product.image}
            alt={product.title}
          />
        </div>

        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
          <p className="text-xl text-gray-700 mb-4">${product.price}</p>
          <p className="mb-4">{product.description}</p>

          <div className="flex items-center mb-4">
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="border w-12 text-center mr-4 p-2"
              min="1"
            />
            <button
              onClick={handleAddToCart}
              className="bg-blue-500 text-white px-4 py-2"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
