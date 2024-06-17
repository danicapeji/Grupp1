import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts, fetchCategoriesWithImages } from '../api';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const {
    data: products,
    error: productsError,
    isLoading: productsLoading,
  } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  const {
    data: categories,
    error: categoriesError,
    isLoading: categoriesLoading,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategoriesWithImages,
  });

  if (productsLoading || categoriesLoading) return <div>Loading...</div>;
  if (productsError) return <div>Error: {productsError.message}</div>;
  if (categoriesError) return <div>Error: {categoriesError.message}</div>;

  return (
    <div className="mt-[4rem] w-full">
      <section className="overflow-hidden bg-[url('https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-top bg-no-repeat">
        <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl w-4/5 lg:w-1/2">
              Discover our latest collection and experience a world of style and comfort!
            </h2>
            <p className="text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed w-4/5 lg:w-1/2">
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

      <div className="container mx-auto mt-10">
        <h2 className="text-2xl font-semibold text-center mt-16">Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 lg:grid-cols-4 justify-center max-w-5xl mx-auto place-items-center mt-12">
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

        <h2 className="text-2xl font-semibold text-center">Start here!</h2>
        <p className="text-lg text-gray-700 mb-4 text-center">
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
