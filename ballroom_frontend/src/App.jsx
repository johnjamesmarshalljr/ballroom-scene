import { Routes, Route } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import HomePage from "./components/pages/HomePage";
import ForumPage from "./components/pages/ForumPage";
import BallOrganizerPage from "./components/pages/BallOrganizerPage";
import HousesPage from "./components/pages/HousesPage";
import ProfilePage from "./components/pages/ProfilePage";
import MusicPage from "./components/pages/MusicPage";
import KikipediaPage from "./components/pages/KikipediaPage";
import BallDetailsPage from "./components/pages/BallDetailsPage";
import BallEditPage from "./components/pages/BallEditPage";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className="pt-20 p-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/forum" element={<ForumPage />} />
          <Route path="/ball-organizer" element={<BallOrganizerPage />} />
          <Route path="/houses" element={<HousesPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/kikipedia" element={<KikipediaPage />} />
          <Route path="/ball-details" element={<BallDetailsPage />} />
          <Route path="/edit-ball/:id" element={<BallEditPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
