import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts, fetchCategories } from "../api";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const { data: products, error: productsError, isLoading: productsLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const { data: categories, error: categoriesError, isLoading: categoriesLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  if (productsLoading || categoriesLoading) return <div>Loading...</div>;
  if (productsError) return <div>Error: {productsError.message}</div>;
  if (categoriesError) return <div>Error: {categoriesError.message}</div>;

  return (
    <div className="header w-full p-4 mt-20">
<<<<<<< HEAD

  <div
    className="relative p-4 m-4 border border-gray-300 rounded-lg shadow-lg flex flex-col justify-end"
    style={{
      height: "600px",
      backgroundImage: `url('https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
    }}
  >
    <h2 className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-4 text-2xl font-semibold text-center text-white">
      Discover our latest collection and experience a world of style and comfort!
    </h2>
    <p className="absolute top-16 left-1/2 transform -translate-x-1/2 mt-4 text-center text-white max-w-xl">
      Our clothes are designed with both quality and fashion in mind, so you can always feel confident and trendy.
      From elegant everyday wear to sophisticated party outfits – we have something for every occasion. 
    </p>
    <Link to="/shop" className="mt-4 flex justify-center">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">Shop now</button>
  </Link>
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
  <h2 className="text-2xl font-semibold text-center">
    Explore our categories!
  </h2>
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 md:gap-4 mt-8">
    {products.slice(0, 4).map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
</div>

  
=======
      <h2 className="text-2xl font-semibold text-center">Välkommen!</h2>
      <p className="text-lg text-gray-700 mb-4 text-center">
        Upptäck vår senaste kollektion och upplev en värld av stil och komfort!
        Våra kläder är designade med både kvalitet och mode i åtanke, så att du alltid kan känna dig självsäker och trendig.
      </p>
      <div
        className="relative p-4 m-4 border border-gray-300 rounded-lg shadow-lg flex flex-col justify-end"
        style={{
          height: "600px",
          backgroundImage: `url('https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
        }}
      >
        <h2 className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-4 text-2xl font-semibold text-center text-white">
          Discover our latest collection and experience a world of style and comfort!
        </h2>
        <p className="absolute top-16 left-1/2 transform -translate-x-1/2 mt-4 text-center text-white max-w-xl">
          Our clothes are designed with both quality and fashion in mind, so you can always feel confident and trendy.
          From elegant everyday wear to sophisticated party outfits – we have something for every occasion. 
        </p>
        <Link to="/shop" className="mt-4 flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">Shop now</button>
        </Link>
      </div>
      <h2 className="text-2xl font-semibold text-center">Kategorier</h2>
      <div>
        {categories.map(category => (
          <Link key={category} to={`/shop?category=${category}`}>
            <button className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded">
              <div className="h-40 w-40 bg-gray-400"></div> {/* Placeholder för kategoribild */}
              <p>{category}</p>
            </button>
          </Link>
        ))}
      </div>
      <h2 className="text-2xl font-semibold text-center">Start here!</h2>
      <p className="text-lg text-gray-700 mb-4 text-center">
        Explore our latest collection and experience a world of style and comfort!
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 md:gap-4 mt-8">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
>>>>>>> dev
  );
};

export default LandingPage;
