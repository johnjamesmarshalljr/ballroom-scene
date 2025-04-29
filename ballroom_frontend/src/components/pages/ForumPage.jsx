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
      title: "Music submission deadline confusion",
      author: "Marco",
      replies: 8,
      upvotes: 7,
    },
    {
      id: 3,
      title: "Best performances of the year so far",
      author: "Ava",
      replies: 5,
      upvotes: 20,
    },
    {
      id: 4,
      title: "Who are the rising stars this year?",
      author: "Leo",
      replies: 3,
      upvotes: 10,
    },
  ]);

  const handleUpvote = (id) => {
    setThreads((prev) =>
      prev.map((t) => (t.id === id ? { ...t, upvotes: t.upvotes + 1 } : t))
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
    <div className="max-w-3xl mx-auto py-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Forum</h1>
        <button
          className="text-sm text-primary hover:text-accent"
          onClick={onBack}
        >
          ← Back to Home
        </button>
      </div>

      {/* Thread List */}
      <div className="space-y-4">
        {threads.map((thread) => (
          <div
            key={thread.id}
            className="bg-white rounded-lg shadow hover:border-accent hover:border transition overflow-hidden"
          >
            <div className="flex p-4">
              {/* Votes */}
              <div className="flex flex-col items-center mr-4">
                <button
                  className="text-gray-500 hover:text-accent"
                  onClick={() => handleUpvote(thread.id)}
                >
                  ▲
                </button>
                <span className="text-sm font-medium">{thread.upvotes}</span>
                <button
                  className="text-gray-500 hover:text-accent"
                  onClick={() => handleDownvote(thread.id)}
                >
                  ▼
                </button>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{thread.title}</h2>
                <p className="text-xs text-gray-500">
                  Posted by {thread.author} • {thread.replies} replies
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ForumPage;
