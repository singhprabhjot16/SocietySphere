import { useState } from "react";
import "../styles/Accordion.css";
import add from "../assets/add.svg";
import cancel from "../assets/cancel.svg";

function Accordian({question}) {
    
    const [isExpanded, setIsExpanded] = useState(false);

    function handleExpand() {
        setIsExpanded(() => !isExpanded);
    }

    return (
        <div className="accordion-container" onClick={handleExpand}>
            <div className="question-title-container"  style={{borderBottom: isExpanded && "1px solid black", paddingBottom: isExpanded && "0.5em"}}>
                <div className="question-title">
                    <span className="question-title-content poppins-regular" style={{fontWeight: isExpanded && "500"}}>{question.title}</span>
                    <span className="pipe poppins-thin">  |  </span>
                    <span className="question-date poppins-thin">{question.date}</span>
                </div>
                <img src={isExpanded ? cancel : add} alt="" className="expand-contract-icon"/>
            </div>
            <div className="answer-title-container" style={{display: isExpanded ? "block" : "none"}}>
                <p className='question-answer poppins-regular'>{question.answer}</p>
            </div>
        </div>
    );
}

export default Accordian;