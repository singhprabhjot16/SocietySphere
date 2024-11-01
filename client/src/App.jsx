import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'; // No BrowserRouter here
import Home from "./pages/Home";
import Footer from "./components/general/Footer";
import Navbar from "./components/general/Navbar";
import SocietyPage from './pages/SocietyPage';
import LoginForm from './components/general/LoginForm';
import AppUtils from './utilities/AppUtils';
import About from './components/about-us/About';
import Coordinators from './components/coordinators/Coordinators';
import Achievements from './components/achievements/Achievements';
import Announcements from './components/announcements/Announcements';
import Alumni from './components/almuni/Alumni';
import FAQs from './components/faqs/FAQ';

function App() {
    // const navigate = useNavigate();
    const [societyData, setSocietyData] = useState(null);
    const [selectedSociety, setSelectedSociety] = useState({
        stateId: null,
        cityId: null,
        collegeId: null,
        societyId: null,
    });

    const fetchSocietyDetails = async () => {
        if (selectedSociety.societyId) {
            const data = await AppUtils.getSocietyDetails(
                selectedSociety.stateId,
                selectedSociety.cityId,
                selectedSociety.collegeId,
                selectedSociety.societyId
            );
            setSocietyData(data);
        }
    };

    useEffect(() => {
        if (selectedSociety.societyId) {
            fetchSocietyDetails();
        }
    }, [selectedSociety.societyId]);

    // useEffect(() => {
    //     navigate('/');
    // }, [navigate]);

    console.log(selectedSociety.societyId);

    return (
        <>
            <Navbar setSelected={setSelectedSociety} />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' />
                
                {/* {selectedSociety.societyId ? ( */}
                    <Route path='/society/' element={<SocietyPage society={societyData} />}>
                        <Route path='about' element={<About about={societyData?.about} />} />
                        <Route path='coordinators' element={<Coordinators teams={societyData?.teams} />} />
                        <Route path='achievements' element={<Achievements achievement={societyData?.achievements} />} />
                        <Route path='announcements' element={<Announcements announcements={societyData?.announcements} />} />
                        <Route path='alumni' element={<Alumni alumni={societyData?.alumni} />} />
                        <Route path='faqs' element={<FAQs faqs={societyData?.faqs} />} />
                    </Route>
                {/* ) : (
                    <Route path='/' element={<Home />} />
                )} */}
            </Routes>
            <Footer />
        </>
    );
}

export default App;