import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
  

  async function handleVerify() {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",
        { email }
      );
      setMessage("Verification email has been sent.");
      navigate("/codeverify");

    } catch (error) {
      setMessage("Error sending verification email.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="  mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">
        Please enter an email to verify
      </h2>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-lg mb-4"
        placeholder="Enter your email"
      />

      <button
        onClick={handleVerify}
        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
        disabled={isLoading}
      >
        {isLoading ? "Verifying..." : "Verify"}
      </button>

      {message && (
        <p className="mt-4 text-sm text-gray-600">{message}</p>
      )}
    </div>
  );
}
