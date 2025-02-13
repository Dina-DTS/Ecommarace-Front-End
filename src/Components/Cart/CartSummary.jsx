import { FaTrashCan } from "react-icons/fa6";

export default function CartSummary({ numOfCartItems, totalPrice, handleclearCart }) {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-md mb-14 mt-10">
      <div>
        <p className="text-yellow-600 font-semibold">Num Of Products: {numOfCartItems}</p>
        <p className="text-lime-800 font-semibold">Total Price: {totalPrice} EGY</p>
      </div>

      <button
        onClick={handleclearCart}
        className="px-4 py-2 rounded-lg flex gap-2 bg-red-800 items-center text-white"
      >
        <FaTrashCan /> Clear Cart
      </button>
    </div>
  );
}
