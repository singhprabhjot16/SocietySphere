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
import PhotoGallery from './components/photo-gallery/PhotoGallery';

function App() {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(false);
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
            console.log("Society Data is: ", societyData);
        }
    };

    useEffect(() => {
        if (selectedSociety.societyId) {
            fetchSocietyDetails();
        }
    }, [selectedSociety.societyId]);

    useEffect(() => {
        navigate('/');
    }, [isLogin]);

    console.log(selectedSociety.societyId);

    return (
        <>
            <Navbar setSelected={setSelectedSociety} isLogin={isLogin} setIsLogin={setIsLogin}/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<LoginForm setIsLogin={setIsLogin}/>} />

                <Route path='/society/' element={<SocietyPage society={societyData} />}>
                    <Route path='about' element={<About about={societyData?.society} societyId={societyData?.society?.id} isLogin={isLogin} />} />
                    <Route path='coordinators' element={<Coordinators teams={societyData?.teams} societyId={societyData?.society?.id} isLogin={isLogin} />} />
                    <Route path='achievements' element={<Achievements achievement={societyData?.achievements} societyId={societyData?.society?.id} isLogin={isLogin} />} />
                    <Route path='announcements' element={<Announcements announcement={societyData?.announcements} societyId={societyData?.society?.id} isLogin={isLogin} />} />
                    <Route path='alumni' element={<Alumni alumnis={societyData?.alumni} societyId={societyData?.society?.id} isLogin={isLogin} />} />
                    <Route path='gallery' element={<PhotoGallery galleryArray={societyData?.galleries} societyId={societyData?.society?.id} isLogin={isLogin} />} />
                    <Route path='faqs' element={<FAQs faq={societyData?.faqs} societyId={societyData?.society?.id} isLogin={isLogin} />} />
                </Route>
            </Routes>
            <Footer />
        </>
    );
}

export default App;