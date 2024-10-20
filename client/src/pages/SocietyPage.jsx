import SocietyHeroSection from "../components/SocietyHeroSection";
import SocietyNavbar from "../components/SocietyNavbar";
import { Route, Routes } from "react-router-dom";
import Coordinators from "../components/Coordinators";
import Achievements from "../components/Achievements";
import Announcements from "../components/Announcements";
import Alumni from "../components/Alumni";
import FAQs from "../components/FAQ";

function SocietyPage({ society }) {
    return (
        <div>
            <SocietyHeroSection society={society} />
            <SocietyNavbar />
            <Routes>
                <Route path="/coordinators" element={<Coordinators society={society} />} />
                <Route path="/achievements" element={<Achievements society={society} />} />
                <Route path="/announcements" element={<Announcements society={society} />} />
                <Route path="/alumni" element={<Alumni society={society} />} />
                <Route path="/faqs" element={<FAQs society={society} />} />
            </Routes>
        </div>
    );
}

export default SocietyPage;
