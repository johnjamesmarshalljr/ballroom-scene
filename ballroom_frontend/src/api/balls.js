const API_BASE = "/api/v1";

async function handleResponse(res) {
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API ${res.status}: ${text}`);
  }
  return res.json();
}

export function createBall(data) {
  return fetch(`${API_BASE}/balls`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ball: data }),
  }).then(handleResponse);
}

export function createCategory(ballId, data) {
  return fetch(`${API_BASE}/balls/${ballId}/categories`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ category: data }),
  }).then(handleResponse);
}