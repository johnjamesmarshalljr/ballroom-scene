import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md flex justify-between items-center px-6 py-4 z-50">
      <div className="text-xl font-bold">🏁 The Scene</div>

      <div className="flex gap-4 items-center">
        <button className="text-gray-700 hover:text-black" onClick={() => navigate("/")}>
          Home
        </button>
        <button className="text-gray-700 hover:text-black" onClick={() => navigate("/forum")}>
          Forum
        </button>
        <button className="text-gray-700 hover:text-black" onClick={() => navigate("/houses")}>
          Houses
        </button>
        <button className="text-gray-700 hover:text-black" onClick={() => navigate("/music")}>
          Music
        </button>
        <button className="text-gray-700 hover:text-black" onClick={() => navigate("/kikipedia")}>
          Kikipedia
        </button>
        <button className="text-gray-700 hover:text-black" onClick={() => navigate("/ball-organizer")}>
          Ball Organizer
        </button>
        <button
          className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800"
          onClick={() => navigate("/profile")}
        >
          Profile
        </button>
        <button
          className="bg-accent text-primary px-3 py-1 rounded hover:bg-primary hover:text-surface border border-accent ml-2"
          onClick={() => navigate("/profile/create")}
        >
          Create Profile
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
