
import React, { useEffect } from 'react';
import { useState } from 'react';
import Home from "./pages/Home";
import Footer from "./components/general/Footer"
import Navbar from "./components/general/Navbar"
import SocietyPage from './pages/SocietyPage';
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
        setSelectedSociety((prev) => ({
            ...prev,
            stateId: null,
            cityId: null,
            collegeId: null,
            societyId: null
        }))
        setSocietyData(data);
    };

    if (selectedSociety.societyId) {
        console.log("Entered if condition");
        fetchSocietyDetails();
    }
    
    console.log(selectedSociety);
    console.log(societyData);
    return (
        <div>
            <Navbar setSelected={setSelectedSociety} />
            {societyData ? (
                <SocietyPage society={societyData} />
            ) : (
                <Home />
            )}
            <Footer />
        </div>
    );
}

export default App;