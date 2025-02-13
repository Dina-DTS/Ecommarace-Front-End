import React, { useState } from "react";
import CartSummary from "./CartSummary";
import CartItemsTable from "./CartItemsTable";
import CheckoutForm from "./CheckoutForm";
import cart_image from "../../assets/empty-cart-flat-illustration-concept-vector.jpg";
import { useFormik } from "formik";
import LoadingComponent from "../loadingComponent/loadingComponent";
import FunctionsCart from "../Cart/FunctionsCart";


export default function Cart() {
  const [showForm, setshowForm] = useState(false);
  const {
    isloading,
    numOfCartItems,
    cartId,
    cartDetails,
    products,
    handleremoveProductFromCart,
    handleupdateProductQun,
    handleclearCart,
    handleCheckOutSession,
  } = FunctionsCart();

  const formik = useFormik({
    initialValues: {
      city: '',
      details: '',
      phone: '',
    },
    onSubmit: handleCheckOutSession,
  });

  if (isloading) {
    return <LoadingComponent />;
  }

  return (
    <>
      {numOfCartItems === 0 ? (
        <div className="text-center mt-9 text-green-700">
          <h2>Empty Cart</h2>
          <img className="mx-auto" src={cart_image} alt="Empty Cart" />
        </div>
      ) : (
        <>
          <CartSummary numOfCartItems={numOfCartItems} totalPrice={cartDetails?.totalCartPrice} handleclearCart={handleclearCart} />
          <CartItemsTable products={products} handleremoveProductFromCart={handleremoveProductFromCart} handleupdateProductQun={handleupdateProductQun} />
          <div className="flex justify-center p-5">
            <button onClick={() => setshowForm(true)} className="px-4 py-2 rounded-lg bg-green-800 text-white mb-7 mt-8">
              Continue Payment
            </button>
          </div>
        </>
      )}
      {showForm && <CheckoutForm formik={formik} setshowForm={setshowForm} />}
    </>
  );
}
