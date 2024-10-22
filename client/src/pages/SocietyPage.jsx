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
                <Route path="/coordinators" element={<Coordinators teams={society.teams} societyId={society.society.id} />} />
                <Route path="/achievements" element={<Achievements achievements={society.achievements} />} />
                <Route path="/announcements" element={<Announcements announcements={society.announcements} />} />
                <Route path="/alumni" element={<Alumni alumni={society.alumni} />} />
                <Route path="/faqs" element={<FAQs faqs={society.faqs} />} />
            </Routes>
        </div>
    );
}

export default SocietyPage;
