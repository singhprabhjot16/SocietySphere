import "../styles/SocietyNavbar.css";
import "../styles/index.css";

function SocietyNavbar() {
    return (
        <div className="society-navbar div-padding">
            <div className="routes">
                <p className="route inter">About Us</p>
                <p className="route inter">Coordinators</p>
                <p className="route inter">Achievements</p>
                <p className="route inter">Announcements</p>
                <p className="route inter">Alumni</p>
                <p className="route inter">Photo Gallery</p>
                <p className="route inter">FAQs</p>
            </div>
            <button className="inter join-us">Join Us</button>
        </div>
    )
}

export default SocietyNavbar;