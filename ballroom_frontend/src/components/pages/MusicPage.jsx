import React, { useState } from "react";

const sampleTracks = [
  {
    id: 1,
    title: "Vogue Femme Mix • House of Eleganza",
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/123456789",
    category: "performance",
    likes: 24,
  },
  {
    id: 2,
    title: "Runway Beats • House of Fierce",
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/987654321",
    category: "runway",
    likes: 15,
  },
  {
    id: 3,
    title: "Other Grooves • Community Mix",
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/555555555",
    category: "other",
    likes: 9,
  },
];

function MusicPage({ onBack }) {
  const [tracks, setTracks] = useState(sampleTracks);
  const [filter, setFilter] = useState("all");

  const handleLike = (id) => {
    setTracks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, likes: t.likes + 1 } : t))
    );
  };

  const filtered = filter === "all" ? tracks : tracks.filter((t) => t.category === filter);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Music</h1>
        <button
          className="text-blue-600 hover:underline text-sm"
          onClick={onBack}
        >
          ← Back
        </button>
      </div>

      <div className="flex gap-4 items-center">
        <label htmlFor="category" className="text-sm">
          Filter:
        </label>
        <select
          id="category"
          className="border rounded px-2 py-1"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="performance">Performance</option>
          <option value="runway">Runway</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="space-y-8">
        {filtered.map((track) => (
          <div
            key={track.id}
            className="bg-white p-4 rounded shadow space-y-2"
          >
            <p className="font-semibold">{track.title}</p>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                title={track.title}
                width="100%"
                height="100%"
                scrolling="no"
                frameBorder="no"
                src={track.embedUrl}
              />
            </div>
            <div className="flex items-center gap-2">
              <button
                className="text-gray-600 hover:text-black"
                onClick={() => handleLike(track.id)}
              >
                ❤️
              </button>
              <span className="text-sm">{track.likes} likes</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MusicPage;
