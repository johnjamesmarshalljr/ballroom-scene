import React from "react";

export default function GoogleAuthButton({ onSuccess, onError }) {
  const handleGoogleLogin = () => {
    // Use the backend port 3000 for Google OAuth
    window.location.href = "http://localhost:3001/auth/google";
  };

  return (
    <button
      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow"
      onClick={handleGoogleLogin}
    >
      Sign in with Google
    </button>
  );
}
