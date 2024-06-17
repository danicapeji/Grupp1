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
    <div className="mt-[4rem] w-full"> {/* Adjust the margin-top based on your navbar height */}
      <section className="overflow-hidden bg-center bg-[url('https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-top bg-no-repeat">
        <div className="bg-black/25 p-4 py-8 md:p-8 lg:p-12 lg:px-16 lg:py-24">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl w-2/3">
              Experience a world of style and comfort
            </h2>
            <p className="text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed w-4/5">
              Our clothes are designed with both quality and fashion in mind, so you can always feel confident and trendy.
              From elegant everyday wear to sophisticated party outfits – we have something for every occasion.
            </p>
            <div className="mt-4 sm:mt-8">
              <Link
                to="/shop"
                className="py-3 px-5 rounded bg-blue-500 text-white hover:bg-blue-600"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto p-4 lg:p-12 lg:px-16 lg:py-24">
        <h2 className="text-2xl font-semibold">Categories</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 mt-4 mb-4">
          {categories.map((category) => (
            <Link key={category} to={`/shop?category=${category}`} className="mx-2 mb-4">
              <button className="bg-white shadow-lg hover:bg-gray-100 text-black font-bold rounded-lg flex flex-col items-center w-full">
                <div className="overflow-hidden rounded-t-lg h-40 w-full bg-gray-400">
                  <img src="" alt="" />
                </div>
                <p className="my-2 font-medium">{category}</p>
              </button>
            </Link>
          ))}
        </div>

        <h2 className="text-2xl font-semibold">Start here!</h2>
        <p className="text-lg text-gray-700 mb-4">
          Explore our latest collection and experience a world of style and comfort!
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 mt-8 mb-8">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
