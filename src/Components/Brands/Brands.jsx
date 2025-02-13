import React, { useState } from "react";
import BrandsCard from "../brandsCard/brandsCard";
import useGetBrands from "../../Hooks/useGetProducts";
import LoadingComponent from "../loadingComponent/loadingComponent";

export default function Brands() {
  const { brands, isLoading } = useGetBrands();
  const [loading, setLoading] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(null);

  return (
    <>
      <h2 className="text-2xl font-bold text-center my-4 text-[#4fa74f]">All Brands</h2>

      {isLoading ? (
        <LoadingComponent/>
      ) : (
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4">
          {brands.map((brand) => (
            <BrandsCard key={brand.id} brand={brand} setLoading={setLoading} setSelectedBrand={setSelectedBrand} />
          ))}
        </div>
      )}



      {loading && (
        <LoadingComponent/>
      )}

      {/* Modal */}
      {selectedBrand && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center min-h-56">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[450px] relative">
            
            <button
              onClick={() => setSelectedBrand(null)}
              className="absolute top-3 right-3 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
            >
              ✕
            </button>

            <div className="flex items-center justify-between gap-4">
              <h2 className="text-2xl font-semibold text-green-600">{selectedBrand.name}</h2>
              <img
                src={selectedBrand.image}
                alt={selectedBrand.name}
                className="w-28 h-16 object-contain"
              />
            </div>

            <div className="flex justify-center mt-6 m-2">
              <button
                onClick={() => setSelectedBrand(null)}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
