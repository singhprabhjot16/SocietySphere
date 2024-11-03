import SocietyHeroSection from "../components/general/SocietyHeroSection";
import SocietyNavbar from "../components/general/SocietyNavbar";
import { Outlet } from "react-router-dom"; // Import Outlet

function SocietyPage({ society }) {
    return (
        <div style={{transform: "translateY(60px)"}}>
            <SocietyHeroSection society={society?.society} />
            <SocietyNavbar />
            <Outlet />
        </div>
    );
}

export default SocietyPage;
