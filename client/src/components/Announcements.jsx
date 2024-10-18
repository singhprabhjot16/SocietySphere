import Accordian from "./Accordion";
import "../styles/FAQ.css";
import dummyData from "../../dummyData.json";

function Announcements() {
    return (
        <div className="faqs-container">
            <div className="filler"></div>
            <div className="faq-container">
                {dummyData.announcements.map((announcement, idx) => 
                    <Accordian title={announcement.title} content={announcement.content} 
                    date={announcement.date} key={idx}/>
                )}
            </div>
        </div>
    );
}

export default Announcements;