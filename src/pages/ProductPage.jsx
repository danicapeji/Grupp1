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
    <div className="container mx-auto p-6 mt-16">
      <div className="flex text-black mb-4">
        <Link to="/" className="hover:text-gray-500">
          Home
        </Link>
        <span>&nbsp;/&nbsp;</span>
        <Link to="/shop" className="hover:text-gray-500">
          Shop
        </Link>
        <span>&nbsp;/&nbsp;</span>
        <Link
          key={product.category}
          to={`/shop?category=${product.category}`}
          className="hover:text-gray-500"
        >
          {product.category}
        </Link>
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

          <div className="flex flex-col md:flex-row items-center mb-4">
            <div className="mr-2 mb-2">
              <button
                onClick={() => setQuantity(quantity - 1)}
                className="border rounded-l px-3 py-2 text-sm bg-gray-200 hover:bg-gray-300"
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="border w-12 text-center bg-white py-2 text-sm"
                min="1"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="border rounded-r px-3 py-2 text-sm bg-gray-200 hover:bg-gray-300"
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full md:w-auto mb-2"
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
