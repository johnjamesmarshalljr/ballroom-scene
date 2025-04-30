import React, { useState } from "react";

const initialEntries = [
  {
    id: 1,
    title: "Vogue Femme Category",
    summary: "Dramatic dips, catwalks, and hand performance.",
    content: "Vogue Femme is defined by elaborate feminine styling...",
    tag: "Category",
  },
  {
    id: 2,
    title: "House of Eleganza",
    summary: "Founded by Shayla in 2020, known for elegance.",
    content: "The House of Eleganza has won multiple titles...",
    tag: "House",
  },
];

function KikipediaPage({ onBack }) {
  const [entries] = useState(initialEntries);
  const [search, setSearch] = useState("");
  const [tag, setTag] = useState("All");

  const filtered = entries.filter((e) => {
    const matchesSearch =
      e.title.toLowerCase().includes(search.toLowerCase()) ||
      e.summary.toLowerCase().includes(search.toLowerCase());
    const matchesTag = tag === "All" || e.tag === tag;
    return matchesSearch && matchesTag;
  });

  return (
    <div className="max-w-4xl mx-auto py-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Kikipedia</h1>
        <button
          className="text-sm text-primary hover:text-accent"
          onClick={onBack}
        >
          ← Back to Home
        </button>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <input
          type="text"
          className="flex-grow border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
          placeholder="Search entries..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        >
          <option>All</option>
          <option>House</option>
          <option>Category</option>
          <option>Legend</option>
        </select>
      </div>

      {/* Entry Cards */}
      <div className="space-y-4">
        {filtered.map((e) => (
          <div
            key={e.id}
            className="cursor-pointer bg-white p-6 rounded-lg shadow hover:border-accent hover:border transition"
          >
            <h2 className="text-2xl font-semibold">{e.title}</h2>
            <p className="text-gray-600 mt-1">{e.summary}</p>
            <span className="inline-block mt-2 text-xs font-medium text-accent">
              {e.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KikipediaPage;
