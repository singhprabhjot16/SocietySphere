import "../../styles/general/HeroSection.css"
import "../../styles/index.css"
import heroSectionImage1 from "../../assets/group-1.svg"
import heroSectionImage2 from "../../assets/group-4.svg";

function SocietyHeroSection({ society }) {
    return (
        <div className="hero-section">
            <img src={heroSectionImage1} alt=""/>
            <div className="website">
                <p className="website-name-hero dm-serif-display-regular">{society?.name}</p>
            </div>
            <img src={heroSectionImage2} alt="" className="hero-section-image-2"/>
        </div>
    );
}

export default SocietyHeroSection;