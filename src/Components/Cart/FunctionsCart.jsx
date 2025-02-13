import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Context/CartContext";


export default function FunctionsCart() {
  const [isloading, setisloading] = useState(false);
  const [numOfCartItems, setnumOfCartItems] = useState(0);
  const [cartId, setcartId] = useState(null);
  const [cartDetails, setcartDetails] = useState(null);
  const [products, setproducts] = useState([]);

  const { getUserCart, removeProductFromCart, updateProductQun, clearCart, checkOutSession } = useContext(CartContext);

  useEffect(() => {
    handlegetUserCart();
  }, []);

  

  async function handlegetUserCart() {
    try {
      setisloading(true);
      const res = await getUserCart();
      setnumOfCartItems(res.data.numOfCartItems);
      setcartId(res.data.cartId);
      setcartDetails(res.data.data);
      setproducts(res.data.data.products);
    } catch (error) {
      console.error("Error fetching cart:", error);
    } finally {
      setisloading(false);
    }
  }

  async function handleremoveProductFromCart(pId) {
    try {
      const res = await removeProductFromCart(pId);
      setnumOfCartItems(res.data.numOfCartItems);
      setcartId(res.data.cartId);
      setcartDetails(res.data.data);
      setproducts(res.data.data.products);
    } catch (error) {
      console.error("Error removing product:", error);
    }
  }

  async function handleupdateProductQun(pId, count) {
    if (count <= 0) {
      console.warn("Quantity must be at least 1.");
      return;
    }
    try {
      const res = await updateProductQun(pId, count);
      setnumOfCartItems(res.data.numOfCartItems);
      setcartId(res.data.cartId);
      setcartDetails(res.data.data);
      setproducts(res.data.data.products);
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  }

  async function handleclearCart() {
    try {
      await clearCart();
      setnumOfCartItems(0);
      setcartId(null);
      setcartDetails(null);
      setproducts([]);
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  }

  async function handleCheckOutSession(value) {
    try {
      const res = await checkOutSession(cartId, value);
      if (res?.data?.session?.url) {
        location.href = res.data.session.url;
      } else {
        console.error("Checkout session URL not found");
      }
    } catch (error) {
      console.error("Error initiating checkout:", error);
    }
  }

  return {
    isloading,
    numOfCartItems,
    cartId,
    cartDetails,
    products,
    handlegetUserCart,
    handleremoveProductFromCart,
    handleupdateProductQun,
    handleclearCart,
    handleCheckOutSession,
  };
}
