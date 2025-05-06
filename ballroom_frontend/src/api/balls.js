const API_BASE = "/api/v1";

async function handleResponse(res) {
  if (res.status === 201) {
    return res.json(); // Handle 201 Created responses properly
  }
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API ${res.status}: ${text}`);
  }
  return res.json();
}

export function createBall(data) {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    if (key === "flyer" && data[key]) {
      formData.append("ball[flyer]", data[key]);
    } else {
      formData.append(`ball[${key}]`, data[key]);
    }
  });

  return fetch(`${API_BASE}/balls`, {
    method: "POST",
    body: formData,
  }).then(handleResponse);
}

export function createCategory(ballId, data) {
  const endpoint = ballId ? `${API_BASE}/balls/${ballId}/categories` : `${API_BASE}/categories`;

  // Remove 'kind' from the data object
  const { kind, ...filteredData } = data;

  console.log("Sending request to:", endpoint);
  console.log("Request payload:", filteredData);

  return fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ category: filteredData }),
  }).then(handleResponse);
}

export function getBall(ballId) {
  return fetch(`${API_BASE}/balls/${ballId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then(handleResponse);
}

export function getBalls() {
  return fetch(`${API_BASE}/balls`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then(handleResponse);
}

export function deleteBall(ballId) {
  return fetch(`${API_BASE}/balls/${ballId}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  }).then(handleResponse);
}