import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import { fetchProducts, fetchCategories } from '../api';
import ProductCard from '../components/ProductCard';

const ShopPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const initialCategory = queryParams.get('category') || 'all';

    const { data: products, error: productsError, isLoading: productsLoading } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
    });

    const { data: categories, error: categoriesError, isLoading: categoriesLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: fetchCategories,
    });

    const [selectedCategory, setSelectedCategory] = useState(initialCategory);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;

    useEffect(() => {
        setSelectedCategory(initialCategory);
    }, [initialCategory]);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1); // Reset to first page when category changes
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Add a conditional check to ensure products is defined before filtering
    const filteredProducts = products ? 
        selectedCategory === 'all' ? products : products.filter(product => product.category === selectedCategory)
        : [];

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    
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
                {currentProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            <div className="flex justify-center mt-4">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`p-2 border ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white'}`}
                   
                        >
                        {index + 1}
                    </button>
                ))}
            </div>
        </section>
    );
};

export default ShopPage;
