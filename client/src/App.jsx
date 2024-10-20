
import React, { useEffect } from 'react';
import { useState } from 'react';
import Home from "./pages/Home";
import Footer from "./components/Footer"
// import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import SocietyPage from './pages/SocietyPage';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import SocietyNavbar from './components/SocietyNavbar';
// import About from './components/About';
// import Coordinators from './components/Coordinators';
// import Achievements from './components/Achievements';
// import Announcements from './components/Announcements';
// import Alumni from './components/Alumni';
// import PhotoGallery from './components/PhotoGallery';
// import FAQ from './components/FAQ';
import './constants/APIConstants'
import AppUtils from './utilities/AppUtils.js'

function App() {
    const [societyData, setSocietyData] = useState(null)
    const [selectedSociety, setSelectedSociety] = useState({
        stateId: null,
        cityId: null,
        collegeId: null,
        societyId: null
    });
    const fetchSocietyDetails = async () => {
        console.log("Fetching details for societyId:", selectedSociety.societyId);
        const data = await AppUtils.getSocietyDetails(
            selectedSociety.stateId,
            selectedSociety.cityId,
            selectedSociety.collegeId,
            selectedSociety.societyId
        );
        setSocietyData(data);
    };
    useEffect(() => {
        console.log('useEffect triggered with selectedSociety:', selectedSociety);
        if (selectedSociety.societyId) {
            console.log("Entered if condition");
            fetchSocietyDetails();
        }
    }, [setSelectedSociety]);
    console.log(selectedSociety)
    return (
        <div>
            <Navbar setSelected={setSelectedSociety} />
            {selectedSociety.societyId ? (
                <SocietyPage society={societyData} />
            ) : (
                <Home />
            )}
            <Footer />
        </div>
    );
}

export default App;