import React, { useState, useEffect } from "react";
import {
  fetchThreads,
  createThread,
  updateThread,
} from "../../api/forumThreads";
import { fetchComments, createComment } from "../../api/comments";

function ForumPage({ onBack }) {
  // State
  const [threads, setThreads] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);

  // New-thread form
  const [showNew, setShowNew] = useState(false);
  const [newTitle, setNewTitle] = useState("");

  // New-comment form
  const [newComment, setNewComment] = useState("");

  // Load threads on mount
  useEffect(() => {
    fetchThreads()
      .then(data => {
        setThreads(data);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const handleCreate = async () => {
    if (!newTitle.trim()) return;
    const thread = await createThread({ title: newTitle });
    setThreads(ts => [thread, ...ts]);
    setNewTitle("");
    setShowNew(false);
  };

  const handleUpvote = async (t) => {
    const updated = await updateThread(t.id, { upvotes: t.upvotes + 1 });
    setThreads(ts => ts.map(x => x.id === t.id ? updated : x));
    if (selected?.id === t.id) setSelected(updated);
  };

  const handleDownvote = async (t) => {
    if (t.upvotes === 0) return;
    const updated = await updateThread(t.id, { upvotes: t.upvotes - 1 });
    setThreads(ts => ts.map(x => x.id === t.id ? updated : x));
    if (selected?.id === t.id) setSelected(updated);
  };

  const openThread = async (t) => {
    const comments = await fetchComments(t.id);
    setSelected({ ...t, comments });
  };

  const handleAddComment = async () => {
    if (!newComment.trim() || !selected) return;
    const comment = await createComment(selected.id, { content: newComment });
    setSelected(s => ({ ...s, comments: [...s.comments, comment] }));
    setNewComment("");
  };

  if (loading) return <p className="p-4">Loading…</p>;

  return (
    <div className="max-w-3xl mx-auto py-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Forum</h1>
        <button
          className="text-sm text-primary hover:text-accent"
          onClick={onBack}
        >
          ← Home
        </button>
      </div>

      {!selected ? (
        <>
          {/* New Thread Button */}
          <div className="flex justify-end mb-4">
          <button
             className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 transition"
              onClick={() => setShowNew(true)}
            >
              + New Thread
            </button>
          </div>

          {/* New Thread Modal */}
          {showNew && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-6 rounded space-y-4 max-w-md w-full">
                <h2 className="text-xl font-semibold">Create Thread</h2>
                <input
                  className="w-full border px-3 py-2 rounded"
                  placeholder="Title"
                  value={newTitle}
                  onChange={e => setNewTitle(e.target.value)}
                />
                <div className="flex justify-end gap-2">
                  <button
                    className="text-gray-700 hover:underline"
                    onClick={() => setShowNew(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 transition"
                    onClick={handleCreate}
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Thread List */}
          <div className="space-y-4">
            {threads.map(t => (
              <div
                key={t.id}
                className="cursor-pointer bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex justify-between items-start"
                onClick={() => openThread(t)}
              >
                <div>
                  <h2 className="font-semibold">{t.title}</h2>
                  <p className="text-xs text-gray-500">
                    by {t.author} • {t.comments_count || 0} replies
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <button
                    className="text-gray-600 hover:text-accent"
                    onClick={e => { e.stopPropagation(); handleUpvote(t); }}
                  >
                    ▲
                  </button>
                  <span className="text-sm">{t.upvotes}</span>
                  <button
                    className="text-gray-600 hover:text-accent"
                    onClick={e => { e.stopPropagation(); handleDownvote(t); }}
                  >
                    ▼
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          {/* Thread Detail */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">{selected.title}</h2>
              <button
                className="text-sm text-primary hover:text-accent"
                onClick={() => setSelected(null)}
              >
                ← Back
              </button>
            </div>
            <div className="bg-white p-4 rounded shadow space-y-2">
              <div className="flex items-center gap-2">
                <button
                  className="text-gray-600 hover:text-accent"
                  onClick={() => handleUpvote(selected)}
                >
                  ▲
                </button>
                <span className="font-medium">{selected.upvotes}</span>
                <button
                  className="text-gray-600 hover:text-accent"
                  onClick={() => handleDownvote(selected)}
                >
                  ▼
                </button>
              </div>
              {/* Comments List */}
              <div className="space-y-4">
                {selected.comments.map(c => (
                  <div key={c.id} className="bg-white p-3 rounded shadow">
                    <p className="font-semibold">{c.user}</p>
                    <p>{c.content}</p>
                  </div>
                ))}
              </div>
              {/* New Comment */}
              <div className="space-y-2 mt-4">
                <textarea
                  className="w-full border rounded px-3 py-2"
                  placeholder="Add a comment…"
                  value={newComment}
                  onChange={e => setNewComment(e.target.value)}
                />
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 transition"                  onClick={handleAddComment}
                >
                  Post Comment
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ForumPage;
