import "../styles/HeroSection.css"
import "../styles/index.css"
import heroSectionImage from "../assets/group-1.svg"

function HeroSection() {
    return (
        <div className="hero-section div-padding">
            <div className="website">
                <p className="website-name-hero dm-serif-display-regular">SocietySphere</p>
                <p className="website-tagline poppins-regular">Discover. Connect. Grow</p>
            </div>
            <img src={heroSectionImage} alt=""/>
        </div>
    );
}

export default HeroSection;