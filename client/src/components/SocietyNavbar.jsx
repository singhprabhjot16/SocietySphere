import "../styles/SocietyNavbar.css";
import "../styles/index.css";

function SocietyNavbar() {
    return (
        <div className="society-navbar div-padding">
            <div className="routes">
                <p className="route poppins-regular">About Us</p>
                <p className="route poppins-regular">Coordinators</p>
                <p className="route poppins-regular">Achievements</p>
                <p className="route poppins-regular">Announcements</p>
                <p className="route poppins-regular">Alumni</p>
                <p className="route poppins-regular">Photo Gallery</p>
                <p className="route poppins-regular">FAQs</p>
            </div>
            <button className="poppins-regular join-us">Join Us</button>
        </div>
    )
}

export default SocietyNavbar;