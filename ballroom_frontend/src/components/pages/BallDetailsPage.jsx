import React from "react";

function BallDetailsPage({ onBack }) {
  const ball = {
    name: "Legends Unite",
    date: "April 15, 2025",
    location: "Grand Hall, NYC",
    theme: "Futuristic Eleganza",
    categories: [
      "OTA Performance with prop",
      "Runway with metallics",
      "Realness: Bionic Executive",
    ],
  };

  return (
    <div className="max-w-3xl mx-auto py-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">{ball.name}</h1>
        <button
          className="text-sm text-primary hover:text-accent"
          onClick={onBack}
        >
          ← Back to Home
        </button>
      </div>

      {/* Details Card */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <p>
          <span className="font-medium">Date:</span> {ball.date}
        </p>
        <p>
          <span className="font-medium">Location:</span> {ball.location}
        </p>
        <p>
          <span className="font-medium">Theme:</span> {ball.theme}
        </p>

        <div>
          <span className="font-medium">Categories:</span>
          <ul className="list-disc list-inside mt-2 space-y-1">
            {ball.categories.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BallDetailsPage;
