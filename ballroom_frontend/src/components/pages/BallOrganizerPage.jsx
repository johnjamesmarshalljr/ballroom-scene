import React, { useState } from "react";
import { createBall, createCategory } from "../../api/balls"; // Import createCategory API function

function BallOrganizerPage({ onBack }) {
  const [categories, setCategories] = useState([
    { category_type: "performance", title: "", description: "" },
  ]);
  const [ballName, setBallName] = useState("");
  const [ballDescription, setBallDescription] = useState("");
  const [ballId, setBallId] = useState(null); // Add state for ballId
  const [ballDate, setBallDate] = useState(""); // New state for date
  const [ballLocation, setBallLocation] = useState(""); // New state for location
  const [ballTheme, setBallTheme] = useState(""); // New state for theme
  const [ballFlyer, setBallFlyer] = useState(null); // New state for flyer

  const handleChange = (index, field, value) => {
    const updated = [...categories];
    updated[index][field === "type" ? "category_type" : field] = value;
    console.log(`Updating field '${field}' for category at index ${index} with value:`, value);
    console.log('Updated categories state:', updated);
    setCategories(updated);
  };

  const addCategory = () => {
    setCategories([
      ...categories,
      { category_type: "", title: "", description: "" }, // Add a blank category object
    ]);
  };

  const saveCategory = async (index) => {
    try {
      const categoryData = { ...categories[index] };
      console.log('Payload being sent to backend:', categoryData);
      const savedCategory = await createCategory(null, categoryData);
      const updatedCategories = [...categories];
      updatedCategories[index] = { ...categoryData, id: savedCategory.id };
      setCategories(updatedCategories);
    } catch (error) {
      console.error("Failed to save category:", error);
      alert("Failed to save category. Please try again.");
    }
  };

  const saveBall = async () => {
    try {
      const ballData = {
        name: ballName,
        description: ballDescription,
        date: ballDate, // Include date
        location: ballLocation, // Include location
        theme: ballTheme, // Include theme
        category_ids: categories.map((cat) => cat.id), // Include saved category IDs
      };
      const savedBall = await createBall(ballData);
      setBallId(savedBall.id);
      alert("Ball saved successfully!");
      window.location.href = "/"; // Redirect to Home Page
    } catch (error) {
      console.error("Failed to save ball:", error);
      if (!error.message.includes("201")) { // Avoid showing failure alert if status is 201
        alert("Failed to save ball. Please try again.");
      }
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

      {/* Ball Date */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Date
        </label>
        <input
          type="date"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
          value={ballDate}
          onChange={(e) => setBallDate(e.target.value)}
        />
      </div>

      {/* Ball Location */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Location
        </label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
          placeholder="Enter location"
          value={ballLocation}
          onChange={(e) => setBallLocation(e.target.value)}
        />
      </div>

      {/* Ball Theme */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Theme
        </label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
          placeholder="Enter theme"
          value={ballTheme}
          onChange={(e) => setBallTheme(e.target.value)}
        />
      </div>

      {/* Ball Flyer */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Flyer</label>
        <input
          type="file"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
          onChange={(e) => setBallFlyer(e.target.files[0])}
        />
      </div>

      {/* Categories Form */}
      <div className="space-y-4">
        {categories.map((cat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow-md space-y-4">
            {cat.id ? (
              <>
                <p className="text-lg font-semibold">{cat.title}</p>
                <p className="text-sm text-gray-600">{cat.description}</p>
              </>
            ) : (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category Type
                  </label>
                  <select
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                    value={cat.category_type}
                    onChange={(e) => handleChange(idx, "category_type", e.target.value)}
                  >
                    <option value="">Select a type</option>
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
                    onChange={(e) => handleChange(idx, "description", e.target.value)}
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-green-600 transition"
                    onClick={() => saveCategory(idx)}
                  >
                    Save Category
                  </button>
                </div>
              </>
            )}
          </div>
        ))}

        {/* Always show the 'Add Another Category' button */}
        <div className="flex justify-start mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 transition"
            onClick={addCategory}
          >
            + Add Another Category
          </button>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center">
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
