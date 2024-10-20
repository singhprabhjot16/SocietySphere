import SocietyHeroSection from "../components/SocietyHeroSection";
import SocietyNavbar from "../components/SocietyNavbar";
import { Route, Routes } from "react-router-dom";
import Coordinators from "../components/Coordinators";
import Achievements from "../components/Achievements";
import Announcements from "../components/Announcements";
import Alumni from "../components/Alumni";
import FAQs from "../components/FAQ";
import dummyData from "../../dummyData.json";

function SocietyPage({ society }) {
    return (
        <div>
            <SocietyHeroSection society={society} />
            <SocietyNavbar />
            {/* <Routes>
                <Route path="/coordinators" element={<Coordinators teams={society.teams} />} />
                <Route path="/achievements" element={<Achievements achievements={society.achievements} />} />
                <Route path="/announcements" element={<Announcements announcements={society.announcements} />} />
                <Route path="/alumni" element={<Alumni alumni={society.alumni} />} />
                <Route path="/faqs" element={<FAQs faqs={society.faqs} />} />
            </Routes> */}
            <Routes>
                <Route path="/coordinators" element={<Coordinators teams={dummyData.team} />} />
                <Route path="/achievements" element={<Achievements achievements={dummyData.achievements} />} />
                <Route path="/announcements" element={<Announcements announcements={dummyData.announcements} />} />
                <Route path="/alumni" element={<Alumni alumni={dummyData.alumni} />} />
                <Route path="/faqs" element={<FAQs faqs={dummyData.faqs} />} />
            </Routes>

        </div>
    );
}

export default SocietyPage;
