import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api";
import ProductCard from "../components/ProductCard";

const LandingPage = () => {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="header w-full p-4 mt-20">
      <h2 className="text-2xl font-semibold text-center">
        Välkommen!
      </h2>
      <p className="text-lg text-gray-700 mb-4 text-center">
      Upptäck vår senaste kollektion och upplev en värld av stil och
          komfort! Våra kläder är designade med både kvalitet och mode i åtanke,
          så att du alltid kan känna dig självsäker och trendig.
      </p>
      <div
        className="p-4 m-4 border border-gray-300 bg-gray-100 rounded-lg shadow-lg flex flex-col justify-end"
        style={{ height: "600px" }}
      >
        <p className="text-gray-700 text-center">
          Discover our latest collection and experience a world of style and
          comfort! Our clothes are designed with both quality and fashion in
          mind, so you can always feel confident and trendy. From elegant
          everyday wear to sophisticated party outfits – we have something for
          every occasion. Welcome and refresh your wardrobe with timeless
          favorites and the season's hottest news. Shop now and find your new
          look with us!
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px- rounded">
  Shop now
</button>
      </div>
      <h2 className="text-2xl font-semibold text-center">Start here!</h2>
      <p className="text-lg text-gray-700 mb-4 text-center">
        Explore our latest collection and experience a world of style and
        comfort!
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 md:gap-4 mt-8">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
export default LandingPage;
