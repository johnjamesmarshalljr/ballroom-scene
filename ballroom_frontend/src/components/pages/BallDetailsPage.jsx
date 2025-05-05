import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBall } from "../../api/balls";

function BallDetailsPage() {
  const { ballId } = useParams();
  const navigate = useNavigate();
  const [ball, setBall] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBall() {
      try {
        const fetchedBall = await getBall(ballId);
        setBall(fetchedBall);
      } catch (err) {
        setError("Failed to load ball details.");
      }
    }

    fetchBall();
  }, [ballId]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!ball) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto py-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">{ball.name}</h1>
        <button
          className="text-sm text-primary hover:text-accent"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>
      </div>

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
        <p>
          <span className="font-medium">Description:</span> {ball.description}
        </p>

        <div>
          <span className="font-medium">Categories:</span>
          <ul className="list-disc list-inside mt-2 space-y-1">
            {ball.categories.map((c, i) => (
              <li key={i}>{c.title} - {c.description}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BallDetailsPage;
