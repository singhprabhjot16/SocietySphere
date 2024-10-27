import "../../styles/general/AboutWebsite.css"

function AboutWebsite() {
    return (
        <div className="about-website-container">
            <div className="who-are-we">
                <p className="who-are-we-heading poppins-bold">Who are we?</p>
                <p className="who-are-we-content poppins-regular">Club Connect is your go-to platform for discovering and connecting with college societies and clubs that align with your interests. Whether you're looking to explore cultural, technical, social, or sports societies, we’ve made it easy to find and engage with groups that share your passions. Join us to stay updated, participate in events, and make the most of your college experience!</p>
            </div>
            <div className="who-are-we">
                <p className="who-are-we-heading poppins-bold">How does it work?</p>
                <div className="what-can-you-do-container">
                    <div className="what-can-you-do">
                        <div className="number poppins-bold">01</div>
                        <div className="what-can-you-do-content div-padding">
                            <p className="poppins-bold" style={{marginBottom: "0.5em", fontSize: "1.25em"}}>Register Your College and Society</p>
                            <p className="poppins-regular">Start by registering your college and society on Club Connect. Once your college is registered, society admins can create accounts for individual societies within the college.</p>
                        </div>
                    </div>
                    <div className="what-can-you-do">
                        <div className="what-can-you-do-content div-padding">
                            <p className="poppins-bold" style={{marginBottom: "0.5em", fontSize: "1.25em"}}>Add Your Society’s Details</p>
                            <p className="poppins-regular">Customize your society profile by adding important details: your mission, objectives, contact information, and the types of activities you offer. Make sure to include team members, achievements, and an engaging description!</p>
                        </div>
                        <div className="number poppins-bold">02</div>
                    </div>
                    <div className="what-can-you-do">
                        <div className="number poppins-bold">03</div>
                        <div className="what-can-you-do-content div-padding">
                            <p className="poppins-bold" style={{marginBottom: "0.5em", fontSize: "1.25em"}}>Add Your Society’s Details</p>
                            <p className="poppins-regular">Customize your society profile by adding important details: your mission, objectives, contact information, and the types of activities you offer. Make sure to include team members, achievements, and an engaging description!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutWebsite;
