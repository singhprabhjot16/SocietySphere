import Accordian from "../reusable/Accordion";
import "../../styles/faqs/FAQ.css";
import AppUtils from "../../utilities/AppUtils";
import dummyData from "../../../dummyData.json";
import NothingHere from "../reusable/NothingHere";

function Announcements({ announcements }) {
    return (
        <div className="faqs-container">
            <div className="filler"></div>
            <div className="faq-container">
                {!AppUtils.checkEmpty(announcements) ? announcements.map((announcement, idx) => 
                    <Accordian title={announcement.title} content={announcement.content} 
                    date={announcement.date} key={idx}/>
                ) : <NothingHere />}
            </div>
        </div>
    );
}

export default Announcements;