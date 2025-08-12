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
import ProfileCreatePage from "./pages/ProfileCreatePage";

function App() {
  return (
    <div className="min-h-screen bg-primary font-body text-secondary transition-colors duration-500">
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-neon-pink via-primary to-neon-blue opacity-40 blur-2xl" />
      <NavBar />
      <main className="pt-20 p-4 max-w-5xl mx-auto">
        <div className="rounded-xl bg-dark-card/80 shadow-neon p-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/forum" element={<ForumPage />} />
            <Route path="/ball-organizer" element={<BallOrganizerPage />} />
            <Route path="/houses" element={<HousesPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/profile/create" element={<ProfileCreatePage />} />
            <Route path="/music" element={<MusicPage />} />
            <Route path="/kikipedia" element={<KikipediaPage />} />
            <Route path="/ball-details" element={<BallDetailsPage />} />
            <Route path="/edit-ball/:id" element={<BallEditPage />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
