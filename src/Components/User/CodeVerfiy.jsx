import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

export default function CodeVerify() {
  const [resetCode, setResetCode] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";

  async function handleSubmit() {
    if (!resetCode) {
      setMessage("Please enter the verification code.");
      return;
    }

    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",
        { resetCode }
      );

      if (data.status === "Success") {
        navigate("/restpass", { state: { email } });
      } else {
        setMessage("Invalid or expired verification code.");
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Error verifying the code.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">
        Enter Verification Code
      </h2>

      <input
        type="text"
        value={resetCode}
        onChange={(e) => setResetCode(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-lg mb-4"
        placeholder="Enter verification code"
      />

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        disabled={isLoading}
      >
        {isLoading ? "Verifying..." : "Verify Code"}
      </button>

      {message && <p className="mt-4 text-sm text-gray-600">{message}</p>}
    </div>
  );
}
