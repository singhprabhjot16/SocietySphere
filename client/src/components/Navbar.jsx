import { useState } from "react";
import explore from "../assets/explore.svg";
import profile from "../assets/profile.svg";
import search from "../assets/search.svg";
import "../styles/Navbar.css";
import SearchDropdown from "./SearchDropdown";

function Navbar({ setSelected }) {
    const [isLogin, setIsLogin] = useState(false);
    const [display, setDisplay] = useState("none");

    function showSearchDropdown() {
        setDisplay(display === "flex" ? "none" : "flex");
    }

    return (
        <>
            <div className="navbar div-padding">
                <p className="website-name dm-serif-display-regular">Club Connect</p>
                <div className="navbar-routes">
                    <div className="navbar-route" onClick={showSearchDropdown}>
                        <img src={explore} alt="" className="navbar-route-logo"/>
                        <p className="navbar-route-name poppins-regular">Explore</p>
                    </div>
                    <div className="navbar-route">
                        <img src={search} alt="" className="navbar-route-logo"/>
                        <p className="navbar-route-name poppins-regular">Search</p>
                    </div>
                </div>
                <div className="navbar-right-div">
                    {isLogin ? <img src={profile} alt="" className="navbar-route-logo profile"/> : <button className="register-society poppins-regular">Login as Admin</button>}
                </div>
            </div>
            <SearchDropdown display={display} setSelectedSociety={setSelected} />
        </>
    );
}

export default Navbar;
