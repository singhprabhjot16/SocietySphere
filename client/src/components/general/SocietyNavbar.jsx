import { Link, useLocation } from "react-router-dom";
import "../../styles/general/SocietyNavbar.css";
import "../../styles/index.css";

function SocietyNavbar() {
    const location = useLocation();

    const routes = [
        { name: "About Us", path: "/society/about" },
        { name: "Coordinators", path: "/society/coordinators" },
        { name: "Achievements", path: "/society/achievements" },
        { name: "Announcements", path: "/society/announcements" },
        { name: "Alumni", path: "/society/alumni" },
        { name: "Photo Gallery", path: "/society/gallery" },
        { name: "FAQs", path: "/society/faqs" }
    ];
    
    return (
        <div className="society-navbar div-padding">
            <div className="routes">
                {routes.map((route) => (
                    <Link
                        key={route.path}
                        className={`route poppins-regular ${location.pathname === route.path ? 'selected' : ''}`}
                        to={route.path}
                    >
                        {route.name}
                    </Link>
                ))}
            </div>
            {/* <button className="poppins-regular join-us">Join Us</button> */}
        </div>
    );
}

export default SocietyNavbar;
