import SocietyHeroSection from "../components/general/SocietyHeroSection";
import SocietyNavbar from "../components/general/SocietyNavbar";
import { Route, Routes } from "react-router-dom";
import Coordinators from "../components/coordinators/Coordinators";
import Achievements from "../components/achievements/Achievements";
import Announcements from "../components/announcements/Announcements";
import Alumni from "../components/almuni/Alumni";
import FAQs from "../components/faqs/FAQ";
import dummyData from "../../dummyData.json";
import About from "../components/about-us/About";

function SocietyPage({ society }) {
    return (
        <div>
            <SocietyHeroSection society={society} />
            <SocietyNavbar />
            <Routes>
                <Route path="/about" element={<About about={society?.about} societyId={society?.society?.id} /> } />
                <Route path="/coordinators" element={<Coordinators teams={society.teams} societyId={society?.society?.id} />} />
                <Route path="/achievements" element={<Achievements societyAchievements={society.achievements} societyId={society?.society?.id} />} />
                <Route path="/announcements" element={<Announcements announcements={society.announcements} societyId={society?.society?.id} />} />
                <Route path="/alumni" element={<Alumni alumni={society.alumni} societyId={society?.society?.id} />} />
                <Route path="/faqs" element={<FAQs faqs={society.faqs} societyId={society?.society?.id} />} />
            </Routes>
            {/* <Routes>
                <Route path="/coordinators" element={<Coordinators teams={dummyData.team} />} />
                <Route path="/achievements" element={<Achievements achievements={dummyData.achievements} />} />
                <Route path="/announcements" element={<Announcements announcements={dummyData.announcements} />} />
                <Route path="/alumni" element={<Alumni alumni={dummyData.alumni} />} />
                <Route path="/faqs" element={<FAQs faqs={dummyData.faqs} />} />
            </Routes> */}

        </div>
    );
}

export default SocietyPage;
