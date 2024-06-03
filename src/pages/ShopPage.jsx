import React from 'react';
import { Link } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../api';
import ProductCard from '../components/ProductCard';

const ShopPage = () => {
    const { data: products, error, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
    });
    
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    
    return (
        <section className='flex flex-col p-4 mt-16'>
            <div className='flex text-black'>
                <Link to="/">Home</Link>
                <p>&nbsp;/&nbsp;</p>
                <Link to="/shop">Shop</Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-1 md:gap-4 mt-4 mb-20">
                {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
            </div>
        </section>
    );
};

export default ShopPage;