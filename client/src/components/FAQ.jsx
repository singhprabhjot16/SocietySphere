import Accordian from "./Accordion";
import "../styles/FAQ.css";

function FAQ() {
    const question = [
    {
        title: "What is this society about?",
        date: "29-07-2024",
        answer: "This society is about..."
    },
    {
        title: "What is this society about?",
        date: "29-07-2024",
        answer: "This society is about..."
    },
    {
        title: "What is this society about?",
        date: "29-07-2024",
        answer: "This society is about..."
    }];

    return (
        <div className="faqs-container">
            <div className="sorting">
                
            </div>
            <div className="faq-container">
                {question.map((q, idx) => <Accordian question={q} key={idx}/>)}
            </div>
        </div>
    );
}

export default FAQ;