import React, { useState } from "react";

function HousesPage({ onBack }) {
  const [houses] = useState([
    {
      id: 1,
      name: "House of Eleganza",
      leaders: ["Shayla", "Marco"],
      upcomingEvents: ["Practice – April 10", "Showcase – May 2"],
      announcements: ["New member spotlight!", "Category update next ball"],
      members: ["Dee", "Zara", "Alex"],
    },
    {
      id: 2,
      name: "House of Xcellence",
      leaders: ["Ava", "Leo"],
      upcomingEvents: ["Runway Rehearsal – April 12"],
      announcements: ["Theme reveal tomorrow!"],
      members: ["Trey", "Mina", "Sky"],
    },
  ]);
  const [selected, setSelected] = useState(null);

  return (
    <div className="max-w-4xl mx-auto py-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          {selected ? selected.name : "Houses"}
        </h1>
        <button
          className="text-sm text-primary hover:text-accent"
          onClick={() => (selected ? setSelected(null) : onBack())}
        >
          ← {selected ? "All Houses" : "Back"}
        </button>
      </div>

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
                {selected[section].map((item, i) => (
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
