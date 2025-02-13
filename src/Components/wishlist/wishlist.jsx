import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import toast from "react-hot-toast";
import { CartContext } from "../../Context/CartContext";
export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const { addProductToCart } = useContext(CartContext);

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  function handleRemoveFromWishlist(productId) {
    const updatedWishlist = wishlist.filter((product) => product.id !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  }

  async function handleAddToCart(productId) {
    await addProductToCart(productId);
    toast.success("Product added to cart!");

    handleRemoveFromWishlist(productId);
  }

  

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">My Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="text-gray-500">No products in wishlist.</p>
      ) : (
        <div className="overflow-x-auto">
          {/* Table for larger screens */}
          <table className="min-w-full border border-gray-300 text-center hidden md:table">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 border">Image</th>
                <th className="py-2 px-4 border">Product Name</th>
                <th className="py-2 px-4 border">Price</th>
                <th className="py-2 px-4 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {wishlist.map((product) => (
                <tr key={product.id} className="border">
                  <td className="py-2 px-4">
                    <Link to={`/productDetails/${product.id}/${product.category._id}`}>
                      <img src={product.imageCover} alt="" className="w-16 object-cover mx-auto h-16" />
                    </Link>
                  </td>
                  <td className="py-2 px-4">{product.title}</td>
                  <td className="py-2 px-4">{product.price} EGY</td>
                  <td className="py-2 px-4 flex justify-center gap-2">
                    <button
                      onClick={() => handleAddToCart(product.id)}
                      className="bg-green-500 text-white px-3 py-1 rounded"
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={() => handleRemoveFromWishlist(product.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Flex layout for small screens */}
          <div className="md:hidden flex flex-col gap-4">
            {wishlist.map((product) => (
              <div
                key={product.id}
                className="border p-4 rounded-lg shadow-md flex flex-col items-center text-center"
              >
                <Link to={`/productDetails/${product.id}/${product.category._id}`}>
                  <img src={product.imageCover} alt="" className="w-24 h-24 object-cover rounded" />
                </Link>
                <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
                <p className="text-gray-700">{product.price} EGY</p>
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => handleAddToCart(product.id)}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => handleRemoveFromWishlist(product.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
