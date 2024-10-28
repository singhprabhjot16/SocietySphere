import { useState, useEffect } from "react";
import explore from "../../assets/explore.svg";
import profile from "../../assets/profile.svg";
import search from "../../assets/search.svg";
import "../../styles/general/Navbar.css";
import SearchDropdown from "./SearchDropdown";
import LoginForm from "./LoginForm";

function Navbar({ setSelected }) {
    const [isLogin, setIsLogin] = useState(false);
    const [display, setDisplay] = useState("none");
    const [showLoginForm, setShowLoginForm] = useState(false); // New state to toggle login form

    function showSearchDropdown() {
        setDisplay(display === "flex" ? "none" : "flex");
    }

    // Handler to show the login form
    function handleShowLoginForm() {
        setShowLoginForm(true);
    }

    function handleLogout() {
        sessionStorage.removeItem("jwtToken");
        setIsLogin(false);  // Update the login state to logged out
        console.log("User logged out successfully");
    }
    
    useEffect(() => {
        const token = sessionStorage.getItem("jwtToken");
        if (token) {
            setIsLogin(true);  // Assume user is logged in if token exists
        }
    }, []);

    return (
        <>
            <div className="navbar div-padding">
                <p className="website-name dm-serif-display-regular">Club Connect</p>
                <div className="navbar-routes">
                    <div className="navbar-route" onClick={showSearchDropdown}>
                        <img src={explore} alt="" className="navbar-route-logo"/>
                        <p className="navbar-route-name poppins-regular">Explore</p>
                    </div>
                    {/* <div className="navbar-route">
                        <img src={search} alt="" className="navbar-route-logo"/>
                        <p className="navbar-route-name poppins-regular">Search</p>
                    </div> */}
                </div>
                <div className="navbar-right-div">
                    {isLogin ? 
                        <button onClick={handleLogout} className="register-society poppins-regular">Logout</button> : 
                        <button onClick={handleShowLoginForm} className="register-society poppins-regular">Login as Admin</button>}
                </div>
            </div>
            <SearchDropdown display={display} setSelectedSociety={setSelected} setDisplay={setDisplay} />
            {showLoginForm && <LoginForm setIsLogin={setIsLogin} setShowLoginForm={setShowLoginForm} />}
        </>
    );
}

export default Navbar;
