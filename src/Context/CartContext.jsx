import { createContext } from "react";
import axios from "axios";

export const CartContext = createContext();

export default function CartContexProvider({ children }) {
  function addProductToCart(id) {
    return axios
      .post(
        "https://ecommerce.routemisr.com/api/v1/cart",
        {
          productId: id,
        },
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      )
      .then((r) => {
        return r;
      })
      .catch((e) => {
        return e;
      });
  }
  function getUserCart(id) {
    return axios
      .get("https://ecommerce.routemisr.com/api/v1/cart", {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((r) => {
        return r;
      })
      .catch((e) => {
        return e;
      });
  }
  function removeProductFromCart(pId) {
    return axios
      .delete(`https://ecommerce.routemisr.com/api/v1/cart/${pId}`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((r) => {
        return r;
      })
      .catch((e) => {
        return e;
      });
  }
  function updateProductQun(pId,count) {
    return axios
      .put(`https://ecommerce.routemisr.com/api/v1/cart/${pId}`,{
        count:count
      } ,{
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((r) => {
        return r;
      })
      .catch((e) => {
        return e;
      });
  }
  function clearCart() {
    return axios
      .delete("https://ecommerce.routemisr.com/api/v1/cart",
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((r) => {
        return r;
      })
      .catch((e) => {
        return e;
      });
  }
  function checkOutSession(cId,shippingAddress) {
    return axios
      .post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cId}?url=${window.location.origin}`,{
        
          "shippingAddress":shippingAddress
      },
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((r) => {
        return r;
      })
      .catch((e) => {
        return e;
      });
  }

  return (
    <CartContext.Provider value={{ addProductToCart, getUserCart,removeProductFromCart,updateProductQun,clearCart,checkOutSession }}>
      {children}
    </CartContext.Provider>
  );
}
