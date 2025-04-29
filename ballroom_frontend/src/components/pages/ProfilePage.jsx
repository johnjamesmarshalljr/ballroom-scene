import React from "react";

function ProfilePage({ onBack }) {
  // Replace these with real data when you hook up your API
  const profile = {
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
        <button
          className="text-blue-600 hover:underline text-sm"
          onClick={onBack}
        >
          ← Back
        </button>
      </div>

      <div className="bg-white p-4 rounded shadow space-y-2">
        <p>
          <strong>Name:</strong> {profile.name}
        </p>
        <p>
          <strong>House:</strong> {profile.house}
        </p>
        <p>
          <strong>Role:</strong> {profile.role}
        </p>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Titles</h2>
        <ul className="list-disc ml-5 text-sm space-y-1">
          {profile.titles.map((title, idx) => (
            <li key={idx}>{title}</li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Saved Clips</h2>
        <ul className="list-disc ml-5 text-sm space-y-1">
          {profile.savedClips.map((clip) => (
            <li key={clip.id}>{clip.label}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProfilePage;
