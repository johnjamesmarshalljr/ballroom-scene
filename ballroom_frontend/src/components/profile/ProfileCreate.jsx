import React, { useState, useEffect } from "react";

function ProfileCreate({ houses, onSubmit, prefill = {} }) {
  const [name, setName] = useState(prefill.name || "");
  const [email, setEmail] = useState(prefill.email || "");
  const [houseId, setHouseId] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (prefill.name) setName(prefill.name);
    if (prefill.email) setEmail(prefill.email);
  }, [prefill]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !houseId) {
      setError("All fields are required.");
      return;
    }
    setError("");
    onSubmit({ name, email, house_id: houseId });
  };

  return (
    <form className="max-w-md mx-auto bg-surface p-8 rounded-lg shadow border border-border" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-display text-primary mb-6">Create Your Profile</h2>
      {error && <div className="mb-4 text-red-500">{error}</div>}
      <div className="mb-4">
        <label className="block text-secondary mb-1">Name</label>
        <input
          className="w-full p-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-secondary mb-1">Email</label>
        <input
          type="email"
          className="w-full p-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-secondary mb-1">House</label>
        <select
          className="w-full p-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent"
          value={houseId}
          onChange={e => setHouseId(e.target.value)}
          required
        >
          <option value="">Select a house</option>
          {houses.map(house => (
            <option key={house.id} value={house.id}>{house.name}</option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-accent text-primary font-bold rounded hover:bg-primary hover:text-surface transition"
      >
        Create Profile
      </button>
    </form>
  );
}

export default ProfileCreate;
