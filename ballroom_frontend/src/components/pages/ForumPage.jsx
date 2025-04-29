import React, { useState } from "react";

function ForumPage({ onBack }) {
  const [threads, setThreads] = useState([
    {
      id: 1,
      title: "Is the theme too broad this year?",
      author: "Shayla",
      replies: 12,
      upvotes: 14,
    },
    {
      id: 2,
      title: "Music deadline confusion",
      author: "Marco",
      replies: 5,
      upvotes: 9,
    },
    {
      id: 3,
      title: "Clip library improvements?",
      author: "Dee",
      replies: 8,
      upvotes: 7,
    },
  ]);

  const handleUpvote = (id) => {
    setThreads((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, upvotes: t.upvotes + 1 } : t
      )
    );
  };

  const handleDownvote = (id) => {
    setThreads((prev) =>
      prev.map((t) =>
        t.id === id && t.upvotes > 0 ? { ...t, upvotes: t.upvotes - 1 } : t
      )
    );
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Forum</h1>
        <button
          className="text-blue-600 hover:underline text-sm"
          onClick={onBack}
        >
          ← Back to Home
        </button>
      </div>

      {threads.map((thread) => (
        <div
          key={thread.id}
          className="bg-white p-4 rounded shadow mb-4 flex justify-between items-start"
        >
          <div className="flex flex-col">
            <h2 className="text-md font-semibold">{thread.title}</h2>
            <p className="text-xs text-gray-500">
              Posted by {thread.author} • {thread.replies} replies
            </p>
          </div>
          <div className="flex flex-col items-center ml-4">
            <button
              className="text-gray-600 hover:text-black"
              onClick={() => handleUpvote(thread.id)}
            >
              ▲
            </button>
            <p className="text-sm font-medium">{thread.upvotes}</p>
            <button
              className="text-gray-600 hover:text-black"
              onClick={() => handleDownvote(thread.id)}
            >
              ▼
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ForumPage;
