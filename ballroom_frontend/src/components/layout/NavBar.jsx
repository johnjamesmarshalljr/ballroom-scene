import React from "react";

function NavBar({ setView }) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md flex justify-between items-center px-6 py-4 z-50">
      <div className="text-xl font-bold">🏁 Ballroom App</div>

      <div className="flex gap-4 items-center">
        <button className="text-gray-700 hover:text-black" onClick={() => setView("home")}>
          Home
        </button>
        <button className="text-gray-700 hover:text-black" onClick={() => setView("forum")}>
          Forum
        </button>
        <button className="text-gray-700 hover:text-black" onClick={() => setView("houses")}>
          Houses
        </button>
        <button className="text-gray-700 hover:text-black" onClick={() => setView("music")}>
          Music
        </button>
        <button className="text-gray-700 hover:text-black" onClick={() => setView("kikipedia")}>
          Kikipedia
        </button>
        <button className="text-gray-700 hover:text-black" onClick={() => setView("ballOrganizer")}>
          Organize a Ball
        </button>
        <button
          className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800"
          onClick={() => setView("profile")}
        >
          Profile
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
