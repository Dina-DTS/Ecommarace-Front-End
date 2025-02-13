import React, { useState } from 'react';

export default function CartProductDetails({ p, handleremoveProductFromCart,handleupdateProductQun }) {
    const [isRemoving, setIsRemoving] = useState(false);

    async function handleRemove() {
        setIsRemoving(true);
        await handleremoveProductFromCart(p.product.id);
        setIsRemoving(false);
    }

    
    return (
       <>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="p-4">
                <img src={p.product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt="Product" />
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {p.product.title}
            </td>
            <td className="px-6 py-4">
                <div className="flex items-center">
                    <button onClick={()=>handleupdateProductQun(p.product.id,p.count-1)}  className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                        <span className="sr-only">Decrease quantity</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                        </svg>
                    </button>
                    <div>{p.count}</div>
                    <button onClick={()=>handleupdateProductQun(p.product.id,p.count+1)}  className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                        <span className="sr-only">Increase quantity</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                        </svg>
                    </button>
                </div>
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {p.price}
            </td>
            <td className="px-6 py-4">
                {isRemoving ? (
                    <span className="text-gray-500">Removing...</span>
                ) : (
                    <span 
                        onClick={handleRemove} 
                        className="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer">
                        Remove
                    </span>
                )}
            </td>
        </tr>
       </>
    );
}
