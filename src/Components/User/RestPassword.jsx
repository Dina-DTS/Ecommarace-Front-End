import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function handleResetPassword() {
    if (!email || !newPassword) {
      setMessage("Please enter both email and new password.");
      return;
    }

    try {
      setIsLoading(true);
      const { data } = await axios.put(
        "https://ecommerce.routemisr.com/api/v1/auth/resetPassword",
        { email, newPassword }
      );

      if (data.token) {
        setMessage("Password reset successful. Redirecting...");
        setTimeout(() => navigate("/"), 2000);
      } else {
        setMessage("Failed to reset password.");
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Error resetting password.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">
        Reset Your Password
      </h2>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-lg mb-4"
        placeholder="Enter your email"
      />

      <input
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-lg mb-4"
        placeholder="Enter new password"
      />

      <button
        onClick={handleResetPassword}
        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
        disabled={isLoading}
      >
        {isLoading ? "Resetting..." : "Reset Password"}
      </button>

      {message && <p className="mt-4 text-sm text-gray-600">{message}</p>}
    </div>
  );
}
