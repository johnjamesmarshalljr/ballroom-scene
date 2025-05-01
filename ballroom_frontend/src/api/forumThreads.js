// src/api/forumThreads.js

// Use a relative base so CRA’s proxy kicks in
const API_BASE = "/api/v1";

async function handleResponse(res) {
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API ${res.status}: ${text}`);
  }
  return res.json();
}

export function fetchThreads() {
  return fetch(`${API_BASE}/threads`, {
    credentials: "omit"   // <-- do NOT send cookies
  }).then(handleResponse);
}

export function createThread(data) {
  return fetch(`${API_BASE}/threads`, {
    method: "POST",
    credentials: "omit",  // <-- do NOT send cookies
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ forum_thread: data }),
  }).then(handleResponse);
}

export function updateThread(id, attrs) {
  return fetch(`${API_BASE}/threads/${id}`, {
    method: "PATCH",
    credentials: "omit",  // <-- do NOT send cookies
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ forum_thread: attrs }),
  }).then(handleResponse);
}
