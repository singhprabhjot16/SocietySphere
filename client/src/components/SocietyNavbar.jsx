import "../styles/SocietyNavbar.css";
import "../styles/index.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function SocietyNavbar() {
    const [selected, setSelected] = useState("");

    function handleRouteClick(event) {
        setSelected(event.target.name);
    }

    return (
        <div className="society-navbar div-padding">
            <div className="routes">
                <Link className={`route poppins-regular ${selected === "about" && 'selected'}`} to="/about" name="about" onClick={handleRouteClick}>About Us</Link>
                <Link className={`route poppins-regular ${selected === "coordinators" && 'selected'}`} to="/coordinators" name="coordinators" onClick={handleRouteClick}>Coordinators</Link>
                <Link className={`route poppins-regular ${selected === "achievements" && 'selected'}`} to="/achievements" name="achievements" onClick={handleRouteClick}>Achievements</Link>
                <Link className={`route poppins-regular ${selected === "announcements" && 'selected'}`} to="/announcements" name="announcements" onClick={handleRouteClick}>Announcements</Link>
                <Link className={`route poppins-regular ${selected === "alumni" && 'selected'}`} to="/alumni" name="alumni" onClick={handleRouteClick}>Alumni</Link>
                <Link className={`route poppins-regular ${selected === "gallery" && 'selected'}`} to="/gallery" name="gallery" onClick={handleRouteClick}>Photo Gallery</Link>
                <Link className={`route poppins-regular ${selected === "faqs" && 'selected'}`} to="/faqs" name="faqs" onClick={handleRouteClick}>FAQs</Link>
            </div>
            <button className="poppins-regular join-us">Join Us</button>
        </div>
    );
}

export default SocietyNavbar;