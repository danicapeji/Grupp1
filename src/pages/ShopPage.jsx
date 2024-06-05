import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import { fetchProducts, fetchCategories } from '../api';
import ProductCard from '../components/ProductCard';

const ShopPage = () => {
    const { data: products, error: productsError, isLoading: productsLoading } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
    });

    const { data: categories, error: categoriesError, isLoading: categoriesLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: fetchCategories,
    });

    const [selectedCategory, setSelectedCategory] = useState('all');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const filteredProducts = selectedCategory === 'all'
        ? products
        : products.filter(product => product.category === selectedCategory);

    if (productsLoading || categoriesLoading) return <div>Loading...</div>;
    if (productsError) return <div>Error: {productsError.message}</div>;
    if (categoriesError) return <div>Error: {categoriesError.message}</div>;

    return (
        <section className='flex flex-col p-4 mt-16'>
            <div className='flex text-black'>
                <Link to="/">Home</Link>
                <p>&nbsp;/&nbsp;</p>
                <Link to="/shop">Shop</Link>
            </div>

            <div className="mt-4 flex space-x-2">
                <button
                    onClick={() => handleCategoryClick('all')}
                    className={`p-2 border ${selectedCategory === 'all' ? 'bg-blue-500 text-white' : 'bg-white'}`}
                >
                    All products
                </button>
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => handleCategoryClick(category)}
                        className={`p-2 border ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-white'}`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-1 md:gap-4 mt-4 mb-20">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default ShopPage;
