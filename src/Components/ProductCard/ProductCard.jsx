import { useContext, useState, useEffect } from "react";
import { FaStar, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import toast from "react-hot-toast";

export default function ProductCard({ product }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false); 
  const { addProductToCart } = useContext(CartContext);



  // Check if product is already in the wishlist when the component mounts
  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const productInWishlist = wishlist.some((item) => item.id === product.id);
    setIsWishlisted(productInWishlist);
  }, [product.id]);

  

  // Add or remove product from wishlist
  function handleWishlist() {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (isWishlisted) {
      wishlist = wishlist.filter((item) => item.id !== product.id);
    } else {
      wishlist.push(product);
    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    setIsWishlisted(!isWishlisted);
  }


  // Handle adding a product to the cart
  async function handleAddProductToCart(id) {
    setIsLoading(true);
    try {
      const res = await addProductToCart(id);
      toast.success(res.data.message);
    } catch (error) {
      toast.error("Failed to add product to cart");
    }
    setIsLoading(false);
  }

  return (
    <div className="card overflow-hidden group mt-11 border cardCom p-7">
      <Link to={`/productDetails/${product.id}/${product.category._id}`}>
        <img
          src={product.imageCover}
          alt=""
          className="w-full md:h-52 object-cover object-center"
        />
        <span className="text-green-500">{product.category.name}</span>
        <h2 className="text-lg font-semibold">
          {product.title.split(" ", 2).join(" ")}
        </h2>
        <span className="text-green-500">{product.category.name}</span>
        <div className="flex justify-between">
          <span>{product.price} EGY</span>
          <span>
            {product.ratingsAverage} <FaStar className="inline-block text-yellow-300" />
          </span>
        </div>
      </Link>

      <div className="flex items-center gap-3 mt-2">
        <button
          disabled={isLoading}
          onClick={() => handleAddProductToCart(product.id)}
          className="btn w-full translate-y-20 transition-all duration-500 group-hover:translate-y-0"
        >
          {isLoading ? "Loading" : "Add Product"}
        </button>
        <FaHeart
          className={`text-2xl cursor-pointer transition p-1 rounded-full ${
            isWishlisted ? "bg-red-500 text-white" : "bg-gray-200 text-black"
          }`}
          onClick={handleWishlist}
        />
      </div>
    </div>
  );
}
