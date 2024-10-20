
import React from 'react';
import { useState } from 'react';
import Home from "./pages/Home";
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import SocietyPage from './pages/SocietyPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SocietyNavbar from './components/SocietyNavbar';
import About from './components/About';
import Coordinators from './components/Coordinators';
import Achievements from './components/Achievements';
import Announcements from './components/Announcements';
import Alumni from './components/Alumni';
import PhotoGallery from './components/PhotoGallery';
import FAQ from './components/FAQ';

function App() {
  const [selectedSocietyId, setSelectedSocietyId] = useState(null);
  
  return (
    <div>
        <Navbar setSelectedSocietyId={setSelectedSocietyId} />
        {selectedSocietyId ? (
            <SocietyPage societyId={selectedSocietyId} />
        ) : (
            <Home />
        )}
        <Footer />
    </div>
);
}

export default App;