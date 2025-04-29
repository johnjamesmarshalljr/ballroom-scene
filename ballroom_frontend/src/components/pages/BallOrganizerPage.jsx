import React, { useState } from "react";

function BallOrganizerPage({ onBack }) {
  const [categories, setCategories] = useState([
    { type: "performance", title: "", description: "" },
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...categories];
    updated[index][field] = value;
    setCategories(updated);
  };

  const addCategory = () => {
    setCategories([
      ...categories,
      { type: "performance", title: "", description: "" },
    ]);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Organize a Ball</h1>
        <button
          className="text-blue-600 hover:underline text-sm"
          onClick={onBack}
        >
          ← Back
        </button>
      </div>

      <h2 className="text-lg font-semibold mb-2">Categories</h2>
      <div className="space-y-4">
        {categories.map((cat, index) => (
          <div key={index} className="bg-white p-4 rounded shadow space-y-2">
            <select
              className="w-full border px-3 py-2 rounded"
              value={cat.type}
              onChange={(e) => handleChange(index, "type", e.target.value)}
            >
              <option value="performance">Performance</option>
              <option value="runway">Runway</option>
              <option value="realness">Realness</option>
              <option value="fashion">Fashion</option>
            </select>
            <input
              className="w-full border px-3 py-2 rounded"
              placeholder="Category title"
              value={cat.title}
              onChange={(e) => handleChange(index, "title", e.target.value)}
            />
            <textarea
              className="w-full border px-3 py-2 rounded"
              placeholder="Category description"
              value={cat.description}
              onChange={(e) =>
                handleChange(index, "description", e.target.value)
              }
            />
          </div>
        ))}
      </div>

      <button
        className="mt-4 bg-black text-white px-4 py-2 rounded"
        onClick={addCategory}
      >
        + Add Another
      </button>
    </div>
  );
}

export default BallOrganizerPage;
