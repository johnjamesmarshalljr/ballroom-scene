import { useState } from "react";
import NavBar from "./components/layout/NavBar";
import HomePage from "./components/pages/HomePage";
import ForumPage from "./components/pages/ForumPage";
import BallOrganizerPage from "./components/pages/BallOrganizerPage";
import HousesPage from "./components/pages/HousesPage";
import ProfilePage from "./components/pages/ProfilePage";
import MusicPage from "./components/pages/MusicPage";
import KikipediaPage from "./components/pages/KikipediaPage";
import BallDetailsPage from "./components/pages/BallDetailsPage";

function App() {
  const [view, setView] = useState("home");

  const renderPage = () => {
    switch (view) {
      case "forum":
        return <ForumPage onBack={() => setView("home")} />;
      case "ballOrganizer":
        return <BallOrganizerPage onBack={() => setView("home")} />;
      case "houses":
        return <HousesPage onBack={() => setView("home")} />;
      case "profile":
        return <ProfilePage onBack={() => setView("home")} />;
      case "music":
        return <MusicPage onBack={() => setView("home")} />;
      case "kikipedia":
        return <KikipediaPage onBack={() => setView("home")} />;
      case "ballDetails":
        return <BallDetailsPage onBack={() => setView("home")} />;
      default:
        return <HomePage setView={setView} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar setView={setView} />
      <main className="pt-20 p-4">{renderPage()}</main>
    </div>
  );
}

export default App;
