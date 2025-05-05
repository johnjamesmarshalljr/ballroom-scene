import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBall, createBall } from "../../api/balls";

function BallEditPage({ onBack }) {
  const { ballId } = useParams();
  const navigate = useNavigate();
  const [ball, setBall] = useState({ name: "", date: "", location: "", theme: "" });
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    async function fetchBall() {
      try {
        const fetchedBall = await getBall(ballId);
        setBall(fetchedBall);
      } catch (error) {
        console.error("Failed to fetch ball details:", error);
        if (!hasError) {
          setHasError(true);
          alert("The requested ball could not be found. Redirecting to the home page.");
          navigate("/"); // Redirect to Home Page if ball is not found
        }
      }
    }

    fetchBall();
  }, [ballId, hasError]);

  const handleChange = (field, value) => {
    setBall((prevBall) => ({ ...prevBall, [field]: value }));
  };

  const handleSave = async () => {
    try {
      await createBall(ball);
      navigate("/"); // Redirect to Home Page
    } catch (error) {
      console.error("Failed to save ball:", error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-6 space-y-6">
      <h1 className="text-2xl font-bold">Edit Ball</h1>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
          value={ball.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
        <input
          type="date"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
          value={ball.date}
          onChange={(e) => handleChange("date", e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
          value={ball.location}
          onChange={(e) => handleChange("location", e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Theme</label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
          value={ball.theme}
          onChange={(e) => handleChange("theme", e.target.value)}
        />
      </div>

      <div className="flex justify-between items-center">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 transition"
          onClick={handleSave}
        >
          Save
        </button>
        <button
          className="text-gray-700 hover:underline"
          onClick={() => navigate("/")}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default BallEditPage;