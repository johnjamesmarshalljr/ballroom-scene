import React, { useEffect, useState } from "react";
import { getBalls, deleteBall } from "../../api/balls";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [balls, setBalls] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchBalls() {
      try {
        const fetchedBalls = await getBalls();
        setBalls(fetchedBalls);
      } catch (error) {
        console.error("Failed to fetch balls:", error);
      }
    }

    fetchBalls();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this ball?")) {
      try {
        await deleteBall(id);
        setBalls((prevBalls) => prevBalls.filter((ball) => ball.id !== id)); // Update state to rerender the page
      } catch (error) {
        console.error("Failed to delete ball:", error);
      }
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">🏁 Welcome to the Scene</h1>
      <p className="mb-4">Check out the upcoming balls below:</p>

      <div className="space-y-4">
        {balls.length > 0 ? (
          balls.map((ball) => (
            <div key={ball.id} className="bg-white p-4 rounded shadow">
              <h2
                className="text-xl font-semibold cursor-pointer hover:underline"
                onClick={() => navigate(`/edit-ball/${ball.id}`)}
              >
                {ball.name}
              </h2>
              <p className="text-gray-600">Date: {ball.date || "Not specified"}</p>
              <p className="text-gray-600">Location: {ball.location || "Not specified"}</p>
              <p className="text-gray-600">Theme: {ball.theme || "Not specified"}</p>
              <button
                className="text-red-500 hover:underline mt-2"
                onClick={() => handleDelete(ball.id)}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No upcoming balls at the moment.</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;
