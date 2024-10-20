import SocietyHeroSection from "./SocietyHeroSection";
import SocietyNavbar from "./SocietyNavbar";

function SocietyPage({ society }) {
    return (
        <>
        <SocietyHeroSection societyName={society.society} />
        <SocietyNavbar />
        
        </>
    )

}

export default SocietyPage;