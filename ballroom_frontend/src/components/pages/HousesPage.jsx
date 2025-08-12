import React, { useState, useEffect } from "react";

function HousesPage({ onBack }) {
  const [houses, setHouses] = useState([]);
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [newHouse, setNewHouse] = useState({ name: "", leader: "", city: "", established: "" });
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    fetch("/api/v1/houses")
      .then((res) => res.json())
      .then((data) => setHouses(Array.isArray(data) ? data : data.houses || []))
      .catch(() => setError("Failed to load houses."));
  }, [creating]);

  const handleCreateHouse = (e) => {
    e.preventDefault();
    setCreating(true);
    setError("");
    fetch("/api/v1/houses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ house: {
        ...newHouse,
        established: newHouse.established ? parseInt(newHouse.established, 10) : null
      } }),
    })
      .then((res) => {
        setCreating(false);
        if (!res.ok) return res.json().then(err => { throw err; });
        return res.json();
      })
      .then((house) => {
        setHouses((prev) => [...prev, house]);
        setShowForm(false);
        setNewHouse({ name: "", leader: "", city: "", established: "" });
        setError("");
      })
      .catch((err) => {
        let msg = "Failed to create house.";
        if (err && typeof err === "object") {
          if (Array.isArray(err)) msg = err.join(", ");
          else if (err.errors) msg = Object.values(err).flat().join(", ");
        }
        // Only set error if house was not actually added
        if (!showForm) return; // If form is closed, don't show error
        setError(msg);
      });
  };

  return (
    <div className="max-w-4xl mx-auto py-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          {selected ? selected.name : "Houses"}
        </h1>
        <div className="flex gap-2 items-center">
          <button
            className="text-sm text-primary hover:text-accent"
            onClick={() => (selected ? setSelected(null) : onBack && onBack())}
          >
            ← {selected ? "All Houses" : "Back"}
          </button>
          {!selected && (
            <button
              className="ml-2 px-3 py-1 bg-accent text-primary rounded hover:bg-primary hover:text-surface border border-accent"
              onClick={() => setShowForm((f) => !f)}
            >
              {showForm ? "Cancel" : "Create House"}
            </button>
          )}
        </div>
      </div>
      {error && <div className="mb-4 text-red-500">{error}</div>}
      {showForm && !selected && (
        <form onSubmit={handleCreateHouse} className="mb-6 flex flex-wrap gap-4 items-end">
          <div>
            <label className="block text-secondary mb-1">House Name</label>
            <input
              className="p-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent"
              value={newHouse.name}
              onChange={e => setNewHouse({ ...newHouse, name: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-secondary mb-1">Leader</label>
            <input
              className="p-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent"
              value={newHouse.leader}
              onChange={e => setNewHouse({ ...newHouse, leader: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-secondary mb-1">City</label>
            <input
              className="p-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent"
              value={newHouse.city}
              onChange={e => setNewHouse({ ...newHouse, city: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-secondary mb-1">Established (Year)</label>
            <input
              type="number"
              className="p-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent"
              value={newHouse.established}
              onChange={e => setNewHouse({ ...newHouse, established: e.target.value })}
              min="1800"
              max={new Date().getFullYear()}
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-primary text-surface rounded hover:bg-accent hover:text-primary border border-primary"
            disabled={creating}
          >
            {creating ? "Creating..." : "Add"}
          </button>
        </form>
      )}
      {!selected ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {houses.map((h) => (
            <div
              key={h.id}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md cursor-pointer transition"
              onClick={() => setSelected(h)}
            >
              <h2 className="text-xl font-semibold">{h.name}</h2>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          <button
            className="mb-4 px-3 py-1 bg-accent text-primary rounded hover:bg-primary hover:text-surface border border-accent"
            onClick={() => setSelected(null)}
          >
            ← Back to Houses
          </button>
          {["leaders", "upcomingEvents", "announcements", "members"].map((section) => (
            <div key={section} className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-2">
                {section === "leaders"
                  ? "Leaders"
                  : section === "upcomingEvents"
                  ? "Upcoming Events"
                  : section === "announcements"
                  ? "Announcements"
                  : "Members"}
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {(selected[section] || []).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HousesPage;
