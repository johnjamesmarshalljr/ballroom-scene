import React, { useState } from "react";

function HousesPage({ onBack }) {
  const [houses] = useState([
    {
      id: 1,
      name: "House of Eleganza",
      leaders: ["Shayla", "Marco"],
      upcomingEvents: ["Practice - April 10", "Showcase - May 2"],
      members: ["Dee", "Zara", "Alex"],
    },
    {
      id: 2,
      name: "House of Xcellence",
      leaders: ["Ava"],
      upcomingEvents: ["Practice - April 12"],
      members: ["Trey", "Mina", "Sky"],
    },
  ]);

  const [selectedHouse, setSelectedHouse] = useState(null);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          {selectedHouse ? selectedHouse.name : "Houses"}
        </h1>
        <button
          className="text-blue-600 hover:underline text-sm"
          onClick={() => (selectedHouse ? setSelectedHouse(null) : onBack())}
        >
          ← {selectedHouse ? "All Houses" : "Back"}
        </button>
      </div>

      {!selectedHouse ? (
        <div className="space-y-4">
          {houses.map((house) => (
            <div
              key={house.id}
              className="bg-white p-4 rounded shadow cursor-pointer hover:bg-gray-100"
              onClick={() => setSelectedHouse(house)}
            >
              <h2 className="text-lg font-semibold">{house.name}</h2>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Leaders</h3>
            <ul className="list-disc ml-5 text-sm">
              {selectedHouse.leaders.map((leader, idx) => (
                <li key={idx}>{leader}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Upcoming Events</h3>
            <ul className="list-disc ml-5 text-sm">
              {selectedHouse.upcomingEvents.map((event, idx) => (
                <li key={idx}>{event}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Members</h3>
            <ul className="list-disc ml-5 text-sm">
              {selectedHouse.members.map((member, idx) => (
                <li key={idx}>{member}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default HousesPage;
