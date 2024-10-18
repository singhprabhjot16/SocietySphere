import Accordian from "./Accordion";
import "../styles/FAQ.css";
import dummyData from "../../dummyData.json";

function FAQ() {
    return (
        <div className="faqs-container">
            <div className="filler"></div>
            <div className="faq-container">
                {dummyData.faqs.map((q, idx) => 
                    <Accordian title={q.question} content={q.answer} date={q.date} key={idx}/>
                )}
            </div>
        </div>
    );
}

export default FAQ;