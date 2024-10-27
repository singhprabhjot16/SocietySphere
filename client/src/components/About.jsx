import "../styles/About.css";
import dummyData from "../../dummyData.json";

function About({ societyData }) {
    return (
        <div className="about-container">
            <div className="filler"></div>
            <div className="about">
            <div className="about-us-content">
                <h1>{societyData.name}</h1>
                {/* <p>{societyData.aboutSociety}</p> */}
                    <h2>About Society</h2>
                    <p>{!societyData.aboutSociety ? societyData.aboutSociety : "The Coding Society aims to foster a passion for technology and software development among students. Through workshops, coding competitions, and mentorship programs, we encourage innovation and skill development in various programming languages and technologies."}</p>
                
                    <h2>Prerequisites</h2>
                    <p>{societyData.prerequisites ? societyData.prerequisites : "Basic understanding of any programming language (Python, Java, C++). Passion for coding and problem-solving is a must!"}</p>
                
                <div className="about-us-team">
                    <h2>Society Head</h2>
                    <p>{societyData.societyHead}</p>
                </div>
            </div>
            <p></p>
        </div>
        </div>
    );
}

export default About;