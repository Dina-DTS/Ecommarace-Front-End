import React, { useState } from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import { useGetCategories, useGetSubCategories } from "../../Hooks/useGetProducts";
import LoadingComponent from "../loadingComponent/loadingComponent";

export default function Categories() {
  const { categories, isLoading } = useGetCategories();
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Fetch subcategories when a category is selected
  const { subcategories, isLoading: subLoading } = useGetSubCategories(selectedCategory?._id);

  const handleCategoryClick = (category) => {
    setLoading(true);
    setSelectedCategory(category);
    setLoading(false)
  };

  return (
    <>
      <h2 className="font-bold text-center my-4 text-[#4fa74f] mb-14">All Categories</h2>

      {isLoading ? (
         <LoadingComponent/>
      ) : (
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category._id} category={category} onClick={() => handleCategoryClick(category)} />
          ))}
        </div>
      )}

      {/* Global Loading Spinner */}
      {(loading || subLoading) && (
       <LoadingComponent/>
      )}

      {/* Display subcategories when available */}
      {selectedCategory && subcategories && (
        <div className="mt-16">
          <h2 className="text-xl font-semibold text-center my-4 text-[#4fa74f]">
              {selectedCategory.name} Subcategories
          </h2>
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3">
            {subcategories.map((sub) => (
              <div key={sub._id} className="text-center p-3 border rounded-lg shadow  cardCom transform transition duration-300 hover:scale-105 origin-center ">
                <span className="text-green-500">{sub.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
