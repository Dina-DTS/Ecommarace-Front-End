import React, { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { validationSchema } from "./validation.jsx";
import { UserContext } from "../../Context/UserContext.jsx";

export default function Login() {
  const { settoken } = useContext(UserContext);
  const [errorMsg, seterrorMsg] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: handleLogin,
    validationSchema: validationSchema,
  });

  async function handleLogin(values) {
    try {
      setisLoading(true);
      const { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signin",
        values
      );
      console.log(data);
      if (data.message === "success") {
        navigate("/");
        settoken(data.token);
      }
    } catch (error) {
      seterrorMsg("Email or Password Incorrect");
    } finally {
      setisLoading(false);
    }
  }

  useEffect(() => {}, []);

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2 className="my-7 text-green-500">Login Form</h2>

      {errorMsg && (
        <div
          className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          {errorMsg}
        </div>
      )}

      {/* Email Input */}
      <div className="relative z-0 w-full mb-5 group">
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          type="email"
          name="email"
          id="floating_email"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
          placeholder=" "
        />
        <label
          htmlFor="floating_email"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Email address
        </label>
      </div>
      {formik.errors.email && formik.touched.email && (
        <div
          className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          {formik.errors.email}
        </div>
      )}

      {/* Password Input */}
      <div className="relative z-0 w-full mb-5 group">
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          type="password"
          name="password"
          id="password"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
          placeholder=" "
        />
        <label
          htmlFor="password"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Password
        </label>
      </div>
      {formik.errors.password && formik.touched.password && (
        <div
          className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          {formik.errors.password}
        </div>
      )}

   <div className="flex justify-between">
       {/* Forgot Password Link */}
       <div className="flex justify-between items-center mb-4">
        <Link to="/forgetpass" className="text-green-600 hover:underline">
          Forgot Password?
        </Link>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        {isLoading ? "Loading..." : "Login"}
      </button>

   </div>
    </form>
  );
}
