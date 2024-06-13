import React from "react";
import { useQuery } from "@tanstack/react-query";
import {
  fetchProducts,
  fetchCategories,
  fetchCategoriesWithImages,
} from "../api";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const {
    data: products,
    error: productsError,
    isLoading: productsLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const {
    data: categories,
    error: categoriesError,
    isLoading: categoriesLoading,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategoriesWithImages,
  });

  if (productsLoading || categoriesLoading) return <div>Loading...</div>;
  if (productsError) return <div>Error: {productsError.message}</div>;
  if (categoriesError) return <div>Error: {categoriesError.message}</div>;

  return (
    <div className="header w-full p-4 mt-20">
      <h2 className="text-2xl font-semibold text-center">Welcome!</h2>
      <div
        className="relative p-4 m-4 border border-gray-300 rounded-lg shadow-lg flex flex-col justify-end"
        style={{
          height: "600px",
          backgroundImage: `url('https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
        }}
      >
        <h2 className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-4 text-2xl font-semibold text-center text-white">
          Discover our latest collection and experience a world of style and
          comfort!
        </h2>
        <p className="absolute top-40 lg:top-16 left-1/2 transform -translate-x-1/2 mt-4 text-center text-white max-w-xl">
          Our clothes are designed with both quality and fashion in mind, so you
          can always feel confident and trendy. From elegant everyday wear to
          sophisticated party outfits – we have something for every occasion.
        </p>
        <Link to="/shop" className="mt-4 flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
            Shop now
          </button>
        </Link>
      </div>
      <h2 className="text-2xl font-semibold text-center mt-16">Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:grid-cols-3 justify-center max-w-5xl mx-auto place-items-center mt-12">
        {categories.map((category) => (
          <Link key={category.name} to={`/shop?category=${category.name}`}>
            <button className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded">
              <div className="h-40 w-40 bg-gray-400">
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="h-full w-full object-cover rounded"
                />
              </div>
              <p>{category.name}</p>
            </button>
          </Link>
        ))}
      </div>
      <h2 className="text-2xl font-semibold text-center mt-24">Start here!</h2>
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
