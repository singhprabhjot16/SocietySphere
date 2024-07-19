import explore from "../assets/explore.svg";
import profile from "../assets/profile.svg";
import search from "../assets/search.svg";
import "../styles/Navbar.css";
import "../styles/index.css";

function Navbar() {
    return (
        <div className="navbar div-padding">
            <p className="website-name dm-serif-display-regular">SocietySphere</p>
            <div className="navbar-routes">
                <div className="navbar-route">
                    <img src={explore} alt="" className="navbar-route-logo"/>
                    <p className="navbar-route-name inter">Explore</p>
                </div>
                <div className="navbar-route">
                    <img src={search} alt="" className="navbar-route-logo"/>
                    <p className="navbar-route-name inter">Search</p>
                </div>
            </div>
            <div className="navbar-right-div">
                <button className="register-society inter">+ Register Society</button>
                <img src={profile} alt="" className="navbar-route-logo profile"/>
            </div>
        </div>
    )
}

export default Navbar;
