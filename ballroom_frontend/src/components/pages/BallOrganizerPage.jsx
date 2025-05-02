import React, { useState } from "react";
import { createBall, createCategory } from "../../api/balls"; // Import createCategory API function

function BallOrganizerPage({ onBack }) {
  const [categories, setCategories] = useState([
    { type: "performance", title: "", description: "" },
  ]);
  const [ballName, setBallName] = useState("");
  const [ballDescription, setBallDescription] = useState("");
  const [ballId, setBallId] = useState(null); // Add state for ballId

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

  const saveBall = async () => {
    try {
      const ballData = {
        name: ballName,
        description: ballDescription,
        categories,
      };
      const savedBall = await createBall(ballData);
      setBallId(savedBall.id); // Set the ballId after saving the ball
      alert("Ball saved successfully!");
      onBack(); 
    } catch (error) {
      console.error("Failed to save ball:", error);
      alert("Failed to save ball. Please try again.");
    }
  };

  const saveCategory = async (index) => {
    try {
      const categoryData = categories[index];
      await createCategory(ballId, categoryData);
      alert("Category saved successfully!");
    } catch (error) {
      console.error("Failed to save category:", error);
      alert("Failed to save category. Please try again.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Organize a Ball</h1>
        <button
          className="text-sm text-primary hover:text-accent"
          onClick={onBack}
        >
          ← Back to Home
        </button>
      </div>

      {/* Ball Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Ball Name
        </label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
          placeholder="Enter ball name"
          value={ballName}
          onChange={(e) => setBallName(e.target.value)}
        />
      </div>

      {/* Ball Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Ball Description
        </label>
        <textarea
          className="w-full border border-gray-300 rounded px-3 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-accent"
          placeholder="Enter ball description"
          value={ballDescription}
          onChange={(e) => setBallDescription(e.target.value)}
        />
      </div>

      {/* Categories Form */}
      <div className="space-y-4">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-lg shadow-md space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category Type
              </label>
              <select
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                value={cat.type}
                onChange={(e) => handleChange(idx, "type", e.target.value)}
              >
                <option value="performance">Performance</option>
                <option value="runway">Runway</option>
                <option value="realness">Realness</option>
                <option value="fashion">Fashion</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category Title
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Enter title"
                value={cat.title}
                onChange={(e) => handleChange(idx, "title", e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                className="w-full border border-gray-300 rounded px-3 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Describe this category"
                value={cat.description}
                onChange={(e) =>
                  handleChange(idx, "description", e.target.value)
                }
              />
            </div>

            {/* Save Category Button */}
            <div className="flex justify-end">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-green-600 transition"
                onClick={() => saveCategory(idx)}
              >
                Save Category
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center">
        <button
          className="bg-accent text-white px-4 py-2 rounded hover:bg-opacity-90 transition"
          onClick={addCategory}
        >
          + Add Another Category
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 transition"
          onClick={saveBall}
        >
          Save Ball
        </button>
      </div>
    </div>
  );
}

export default BallOrganizerPage;
