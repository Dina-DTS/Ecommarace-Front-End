import React from "react";

export default function CategoryCard({ category, onClick }) {
  return (
    <div className="overflow-visible" onClick={onClick}> 
      <div className="card text-center cardCom transform transition duration-300 hover:scale-105 origin-center p-2 ">
        <img src={category.image} alt={category.name} className="w-full md:h-52 object-cover object-center" />
        <span className="text-green-500 block">{category.name}</span>
      </div>
    </div>
  );
}
