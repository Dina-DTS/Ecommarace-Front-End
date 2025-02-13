import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaShoppingCart } from "react-icons/fa";
import { UserContext } from "../../Context/UserContext";
import fresh_logo from "../../assets/freshcart-logo.svg";
import { CartContext } from "../../Context/CartContext";


export default function Navbar() {
  const { isLogin, settoken } = useContext(UserContext);
  const { getUserCart } = useContext(CartContext);
  const [numOfCartItems, setnumOfCartItems] = useState(0);

  useEffect(() => {
    if (isLogin) {
      handlegetUserCart();
    }
  }, [isLogin]);

  async function handlegetUserCart() {
    try {
      const res = await getUserCart();
      setnumOfCartItems(res.data.numOfCartItems);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  }

  const [Pages, setPages] = useState([
    { text: "Home", path: "/" },
    { text: "Cart", path: "/cart" },
    { text: "Brands", path: "/brands" },
    { text: "Categories", path: "/categories" },
    { text: "Products", path: "/products" },
    { text: "Wishlist", path: "/wishlist" },
  ]);

  const [authPages, setAuthPages] = useState([
    { text: "Login", path: "/login" },
    { text: "Register", path: "/register" },
  ]);

  const [Icons, setIcons] = useState([
    { icon: <FaFacebook />, url: "#" },
    { icon: <FaTwitter />, url: "#" },
    { icon: <FaYoutube />, url: "#" },
    { icon: <FaInstagram />, url: "#" },
  ]);

  const navigate = useNavigate();

  function LogOut() {
    settoken(null);
    setnumOfCartItems(0); 
    navigate("/login");
  }

  const location = useLocation();

  const validPaths = ["/", "/cart", "/brands", "/categories", "/products", "/wishlist", "/productDetails"];

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center gap-4 mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={fresh_logo} alt="FreshCart Logo" className="h-10" />
        </Link>
        
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex ml-auto items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        <div className="hidden items-center gap-4 grow w-full lg:flex lg:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700 ml-auto">
            {isLogin && Pages.map(({ text, path }) => (
              <li key={path}>
                <NavLink to={path} className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0 dark:text-white lg:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">
                  {text}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Social Media Icons */}
          <ul className="font-medium ml-auto flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-4 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
            {Icons.map(({ icon, url }, index) => (
              <li key={index}>
                <a href={url} className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0 dark:text-white lg:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">
                  {icon}
                </a>
              </li>
            ))}
          </ul>

          {/* Cart Icon with Badge */}
          {isLogin && validPaths.includes(location.pathname)&& (
            <div className="relative mx-4">
              <Link to="/cart" className="text-gray-900 hover:text-green-700 dark:text-white text-2xl">
                <FaShoppingCart />
              </Link>
              {numOfCartItems > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold rounded-full px-2">
                  {numOfCartItems}
                </span>
              )}
            </div>
          )}

          {/* Authentication Buttons */}
          <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
            {!isLogin && authPages.map(({ text, path }) => (
              <li key={path}>
                <NavLink to={path} className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0 dark:text-white lg:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">
                  {text}
                </NavLink>
              </li>
            ))}
            {isLogin && (
              <li>
                <button onClick={LogOut} className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0 dark:text-white lg:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
