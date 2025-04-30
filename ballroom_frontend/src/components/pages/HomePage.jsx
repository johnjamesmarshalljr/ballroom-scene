import React from "react";

function HomePage({ setView }) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">🏁 Welcome to the Scene</h1>
      <p className="mb-4">This will be the central feed, upcoming balls, and links to other sections.</p>

      <div className="space-y-2">
        <button
          className="bg-black text-white px-4 py-2 rounded"
          onClick={() => setView("forum")}
        >
          Go to Forum
        </button>

        <button
          className="bg-gray-800 text-white px-4 py-2 rounded"
          onClick={() => setView("music")}
        >
          Go to Music
        </button>
      </div>
    </div>
  );
}

export default HomePage;
