import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SocietyNavbar from './components/SocietyNavbar';
import About from './components/About';
import Coordinators from './components/Coordinators';
import Achievements from './components/Achievements';
import Announcements from './components/Announcements';
import Alumni from './components/Alumni';
import PhotoGallery from './components/PhotoGallery';
import FAQ from './components/FAQ';
import AddCoordinator from "./components/AddCoordinator";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <BrowserRouter>
            <SocietyNavbar />
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/coordinators" element={<Coordinators />} />
                <Route path="/achievements" element={<Achievements />} />
                <Route path="/announcements" element={<Announcements />} />
                <Route path="/alumni" element={<Alumni />} />
                <Route path="/gallery" element={<PhotoGallery />} />
                <Route path="/faqs" element={<FAQ />} />
            </Routes>
        </BrowserRouter>
        <Footer />
        {/* <AddCoordinator /> */}
    </>
  )
}

export default App;