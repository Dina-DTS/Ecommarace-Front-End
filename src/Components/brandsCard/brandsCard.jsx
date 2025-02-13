import React, { useState } from "react";

export default function BrandsCard({ brand, setLoading, setSelectedBrand }) {

  const handleCardClick = () => {
    setLoading(true);

    setTimeout(() => {
      setSelectedBrand(brand);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="overflow-visible"> {/* Prevents clipping */}
      <div
        className="card text-center cardCom transform transition duration-300 hover:scale-105 origin-center p-2"
        onClick={handleCardClick}
      >
        <img src={brand.image} alt="" className="w-full md:h-52 object-cover object-center" />
        <span className="text-green-500  block">{brand.name}</span>
      </div>
    </div>
  );
}
