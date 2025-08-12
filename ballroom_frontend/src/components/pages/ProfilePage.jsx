import React from "react";
import { useLocation } from "react-router-dom";
import GoogleAuthButton from "../auth/GoogleAuthButton";

function ProfilePage({ onBack }) {
  const location = useLocation();
  const [user, setUser] = React.useState(location.state?.user || null);
  const [houseName, setHouseName] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  // On mount, try to load user from localStorage if not in location.state
  React.useEffect(() => {
    if (!user) {
      setLoading(true);
      setError("");
      // Try localStorage first
      const stored = localStorage.getItem("user");
      if (stored) {
        try {
          setUser(JSON.parse(stored));
          setLoading(false);
          return;
        } catch {}
      }
      // If not in localStorage, check URL for user_id (from OAuth)
      const params = new URLSearchParams(window.location.search);
      const userId = params.get("user_id");
      if (userId) {
        fetch(`/api/v1/users/${userId}`)
          .then((res) => {
            if (!res.ok) throw new Error("User fetch failed");
            return res.json();
          })
          .then((u) => {
            setUser(u);
            localStorage.setItem("user", JSON.stringify(u));
            setLoading(false);
          })
          .catch(() => {
            setError("Failed to load user after login. Try again.");
            setLoading(false);
          });
      } else {
        setLoading(false);
      }
    }
  }, []);

  // Save user to localStorage when set
  React.useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  React.useEffect(() => {
    if (user && user.house_id) {
      fetch(`/api/v1/houses/${user.house_id}`)
        .then((res) => res.json())
        .then((house) => setHouseName(house.name || ""))
        .catch(() => setHouseName(""));
    }
  }, [user]);

  // Fallback for demo if no user is found
  const profile = user || {
    name: "Shayla",
    house: "House of Eleganza",
    role: "Voguer",
    titles: ["OTA Vogue Femme Winner – Feb ’25", "Runway Champion – March ’25"],
    savedClips: [
      { id: 1, label: "Legends Unite Recap" },
      { id: 2, label: "Runway Showdown Finals" },
    ],
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">My Profile</h1>
        <div className="flex gap-2 items-center">
          <button
            className="text-blue-600 hover:underline text-sm"
            onClick={onBack}
          >
            ← Back
          </button>
          {user && (
            <button
              className="text-red-500 hover:underline text-sm ml-2"
              onClick={() => {
                localStorage.removeItem("user");
                window.location.href = "/";
              }}
            >
              Log out
            </button>
          )}
        </div>
      </div>

      {loading && (
        <div className="mb-6 text-center text-gray-500">Loading...</div>
      )}
      {error && (
        <div className="mb-6 text-center text-red-500">{error}</div>
      )}

      {!user && !loading && !error && (
        <div className="mb-6">
          <GoogleAuthButton />
        </div>
      )}

      <div className="bg-white p-4 rounded shadow space-y-2">
        <p>
          <strong>Name:</strong> {profile.name}
        </p>
        <p>
          <strong>House:</strong> {houseName || profile.house || profile.house_id}
        </p>
        {profile.role && (
          <p>
            <strong>Role:</strong> {profile.role}
          </p>
        )}
      </div>

      {profile.titles && (
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Titles</h2>
          <ul className="list-disc ml-5 text-sm space-y-1">
            {profile.titles.map((title, idx) => (
              <li key={idx}>{title}</li>
            ))}
          </ul>
        </div>
      )}

      {profile.savedClips && (
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Saved Clips</h2>
          <ul className="list-disc ml-5 text-sm space-y-1">
            {profile.savedClips.map((clip) => (
              <li key={clip.id}>{clip.label}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
