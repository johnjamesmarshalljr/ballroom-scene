// src/api/comments.js
const API_BASE = "/api/v1";

export function fetchComments(threadId) {
  return fetch(`${API_BASE}/threads/${threadId}/comments`, {
    credentials: "omit"
  }).then(res => res.ok ? res.json() : res.text().then(t => { throw new Error(t) }));
}

export function createComment(threadId, data) {
  return fetch(`${API_BASE}/threads/${threadId}/comments`, {
    method: "POST",
    credentials: "omit",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ comment: data }),
  }).then(res => res.ok ? res.json() : res.text().then(t => { throw new Error(t) }));
}
