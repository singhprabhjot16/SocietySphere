import "../../styles/general/AboutWebsite.css"

function AboutWebsite() {
    return (
        <div className="about-website-container">
            <div className="who-are-we">
                <p className="who-are-we-heading poppins-bold">Who are we?</p>
                <p className="who-are-we-content poppins-regular">Club Connect is your go-to platform for discovering and connecting with college societies and clubs that align with your interests. Whether you're looking to explore cultural, technical, social, or sports societies, we’ve made it easy to find and engage with groups that share your passions. Join us to stay updated, participate in events, and make the most of your college experience!</p>
            </div>
            <div className="who-are-we">
                <p className="who-are-we-heading poppins-bold">What Can You Do on Club Connect?</p>
                <div className="what-can-you-do-container">
                    <div className="what-can-you-do">
                        <div className="number poppins-bold">01</div>
                        <div className="what-can-you-do-content">
                            <p>Explore Societies</p>
                            <p>Browse our extensive directory of societies across various interests, including arts, tech, sports, and more! Each society has a dedicated profile showcasing its mission, events, achievements, and team members.</p>
                        </div>
                    </div>
                    <>
                    <div className="number">01</div>
                    <div className="what-can-you-do-content">
                        <p>Explore Societies</p>
                        <p>Browse our extensive directory of societies across various interests, including arts, tech, sports, and more! Each society has a dedicated profile showcasing its mission, events, achievements, and team members.</p>
                    </div>
                    </>
                </div>
            </div>
        </div>
    )
}

export default AboutWebsite;
