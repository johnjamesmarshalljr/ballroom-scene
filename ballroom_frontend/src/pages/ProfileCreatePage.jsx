import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileCreate from "../components/profile/ProfileCreate";
import GoogleAuthButton from "../components/auth/GoogleAuthButton";

function ProfileCreatePage() {
  const [houses, setHouses] = useState([]);
  const [error, setError] = useState("");
  const [prefill, setPrefill] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/api/v1/houses")
      .then((res) => res.json())
      .then((data) => setHouses(Array.isArray(data) ? data : data.houses || []))
      .catch(() => setError("Failed to load houses."));
    // Get Google info from query params
    const params = new URLSearchParams(window.location.search);
    const name = params.get("name") || "";
    const email = params.get("email") || "";
    setPrefill({ name, email });
  }, []);

  const handleCreate = (userData) => {
    fetch("/api/v1/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: userData }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to create profile");
        return res.json();
      })
      .then((user) => {
        navigate("/profile", { state: { user } });
      })
      .catch(() => setError("Failed to create profile."));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-lg">
        {error && <div className="mb-4 text-red-500">{error}</div>}
        <div className="mb-6 flex flex-col items-center">
          <GoogleAuthButton />
          <span className="text-xs text-gray-500 mt-2">Sign up or sign in with Google</span>
        </div>
        <ProfileCreate houses={houses} onSubmit={handleCreate} prefill={prefill} />
      </div>
    </div>
  );
}

export default ProfileCreatePage;
