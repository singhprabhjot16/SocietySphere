import Accordian from "./Accordion";
import "../styles/FAQ.css";
import dummyData from "../../dummyData.json";

function FAQ() {
    return (
        <div className="faqs-container">
            <div className="filler">
                
            </div>
            <div className="faq-container">
                {dummyData.faqs.map((q, idx) => <Accordian question={q} key={idx}/>)}
            </div>
        </div>
    );
}

export default FAQ;