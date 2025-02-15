import React, { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard.jsx';
import MainSlider from '../MainSlider/MainSlider.jsx';
import CategorySlider from '../categorySlider/categorySlider.jsx';
import { useGetProducts } from '../../Hooks/useGetProducts.jsx';
import LoadingComponent from '../loadingComponent/loadingComponent.jsx';

export default function Home() {
    const { products, isLoading } = useGetProducts();
    const [searchQuery, setSearchQuery] = useState('');


    // Ensure products are always an array
    const filteredProducts = (products ?? []).filter((p) =>
        p?.title?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <div className='mb-3'>
                <MainSlider />
                <CategorySlider />
            </div>

            {/* Search Input */}
            <div className="mb-4 flex justify-center">
                <input
                    type="text"
                    placeholder="Search by Title..."
                    className=" p-2 rounded-md w-full mt-7  border-green-500 focus:border-green-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {isLoading ? (
                <LoadingComponent />
            ) : (
                <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4'>
                    {searchQuery ? (
                        filteredProducts.length > 0 ? (
                            filteredProducts.map((p) => <ProductCard key={p.id} product={p} />)
                        ) : (
                            <p className="text-gray-500 col-span-full text-center">
                                No products found for this category.
                            </p>
                        )
                    ) : (
                        products.map((p) => <ProductCard key={p.id} product={p} />)
                    )}
                </div>
            )}
        </div>
    );
}
