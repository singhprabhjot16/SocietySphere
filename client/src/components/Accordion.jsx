import { useState } from "react";
import "../styles/Accordion.css";
import add from "../assets/add.svg";

function Accordian({title, content, date}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [animated, setAnimated] = useState(false);

    function handleExpand() {
        setIsExpanded(() => !isExpanded);
        setAnimated(() => !animated);
    }

    return (
        <div className={`accordion-container ${isExpanded && "open"}`} onClick={handleExpand}>
            <div className="question-title-container"  style={{borderBottom: isExpanded && "1px solid black", paddingBottom: isExpanded && "0.5em"}}>
                <div className="question-title">
                    <span className="question-title-content poppins-regular" style={{fontWeight: isExpanded && "500"}}>{title}</span>
                    <span className="pipe poppins-thin">  |  </span>
                    <span className="question-date poppins-thin">{date}</span>
                </div>
                <img src={add} alt="" className={`${animated ? "animate-forwards" : "animate-backwards"} expand-contract-icon`} />
            </div>
            <div className="answer-title-container" style={{display: isExpanded ? "block" : "none"}}>
                <p className='question-answer poppins-regular'>{content}</p>
            </div>
        </div>
    );
}

export default Accordian;