import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ProductPage = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const dummyProduct = {
    id: id,
    name: "Product",
    price: 250,
  };

  return (
    <div className="bg-gray-400 p-4 fixed h-full w-full top-0 z-10">
      <h1 className="text-white text-2xl">{dummyProduct.name}</h1>
      <p className="flex-space-x-4 text-white">Pris: {dummyProduct.price} kr</p>
      <button
        className="hover:text-gray-500"
        onClick={() => addToCart(dummyProduct)}
      >
        Lägg till i varukorg
      </button>
    </div>
  );
};

export default ProductPage;
