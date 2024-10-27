import { useState } from "react";
import Accordian from "../reusable/Accordion";
import "../../styles/faqs/FAQ.css";
import dummyData from "../../../dummyData.json";
import AddFAQ from "./AddFAQ";
import EditFAQ from "./EditFAQ";
import addIcon from "../../assets/add.svg";
import editIcon from "../../assets/edit.svg";

function FAQ() {
    const [faqs, setFaqs] = useState(dummyData.faqs);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedFAQ, setSelectedFAQ] = useState(null);

    function handleAdd(formData) {
        setFaqs(prevFaqs => [...prevFaqs, formData]);
        setIsAdding(false);
    }

    function toggleAddFAQ() {
        setIsAdding(!isAdding);
    }

    function toggleEditMode() {
        setIsEditing(!isEditing);
    }

    function handleEdit(updatedFAQ) {
        setFaqs(prevFaqs =>
            prevFaqs.map(faq =>
                faq.question === selectedFAQ.question ? updatedFAQ : faq
            )
        );
        setIsEditing(false);
    }

    function handleDelete(faqToDelete) {
        setFaqs(prevFaqs =>
            prevFaqs.filter(faq => faq !== faqToDelete)
        );
        setIsEditing(false);
    }

    function startEditing(faq) {
        setSelectedFAQ(faq);
    }

    return (
        <div className="faqs-container">
            <div className="filler"></div>
            <div className="faq-container">
                {faqs.map((q, idx) => 
                    <div
                        key={idx}
                        onClick={() => isEditing && startEditing(q)}
                        className={isEditing ? "card-wrapper greyscale" : "card-wrapper"}
                    >
                        <Accordian title={q.question} content={q.answer} date={q.date} key={idx}/>
                    </div>
                )}
            </div>
            <div className="changes-container">
                <button onClick={toggleAddFAQ} className="change-button poppins-regular">
                    <img src={addIcon} alt="Add" className="icon" /> Add
                </button>
                <button onClick={toggleEditMode} className="change-button poppins-regular">
                    <img src={editIcon} alt="Edit" className="icon" /> Edit
                </button>
            </div>
            {isAdding && <AddFAQ handleAdd={handleAdd} toggleFunction={toggleAddFAQ} />}
            {selectedFAQ && isEditing && (
                <EditFAQ
                    selectedFAQ={selectedFAQ}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                    toggleFunction={() => {
                        setIsEditing(false);
                        setSelectedFAQ(null);
                    }}
                />
            )}
        </div>
    );
}

export default FAQ;