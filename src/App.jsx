

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import ExploreSpot from "./pages/ExploreSpot";

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<LandingPage />} />
        <Route path="/explore" element={<ExploreSpot />} />

      </Routes>
    </Router>
  );
}

export default App;
