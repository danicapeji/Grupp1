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
    <div className="header"> 
    <div className="p-4 m-4 border border-gray-300 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold">Welcome to Our Store!</h2>
        <p className="text-gray-700">Explore our latest collection and experience a world of style and comfort!</p>
    </div>
    <div className="p-4 m-4 border border-gray-300 bg-gray-100 rounded-lg shadow-lg">
        <p className="text-gray-700">
            Upptäck vår senaste kollektion och upplev en värld av stil och komfort! 
            Våra kläder är designade med både kvalitet och mode i åtanke, så att du alltid 
            kan känna dig självsäker och trendig. Från eleganta vardagsplagg till sofistikerade 
            festoutfits – vi har något för varje tillfälle. Välkommen in och förnya din garderob 
            med tidlösa favoriter och säsongens hetaste nyheter. Shoppa nu och hitta din nya look hos oss!
        </p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-20">
        {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
    </div>
</div>

  );
};
export default LandingPage;
