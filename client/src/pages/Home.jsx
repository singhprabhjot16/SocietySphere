import AboutWebsite from "../components/general/AboutWebsite";
import HeroSection from "../components/general/HeroSection";
import "../styles/index.css"

function Home() {
    return (
        <div className="padding-div" style={{transform: "translateY(60px)"}}>
            <HeroSection />
            <AboutWebsite />
        </div>
    );
}

export default Home;