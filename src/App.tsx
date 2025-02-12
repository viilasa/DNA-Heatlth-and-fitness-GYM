import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ChallengePage from './pages/ChallengePage';
import GymPage from './pages/GymPage';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import AboutPage from './pages/AboutPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/challenge" element={<ChallengePage />} />
          <Route path="/gym" element={<GymPage />} />
          <Route path="/success-stories" element={<SuccessStoriesPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App