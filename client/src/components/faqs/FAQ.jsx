import { useState } from "react";
import Accordian from "../reusable/Accordion";
import "../../styles/faqs/FAQ.css";
import dummyData from "../../../dummyData.json";
import AddFAQ from "./AddFAQ";
import EditFAQ from "./EditFAQ";
import addIcon from "../../assets/add.svg";
import editIcon from "../../assets/edit.svg";
import AppUtils from "../../utilities/AppUtils";
import NothingHere from "../reusable/NothingHere";

function FAQ({ faq, societyId }) {
    const [faqs, setFaqs] = useState(faq);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedFAQ, setSelectedFAQ] = useState(null);

    function handleAdd(formData) {
        setFaqs(prevCoordinators => [...prevCoordinators, formData]);
        const modifiedFormData = {
            question: "",
            answer: ""
        };

        const formDataToSend = new FormData();
        formDataToSend.append('question', formData.question);
        formDataToSend.append('answer', formData.answer);
        console.log(formDataToSend)
        AppUtils.updateSociety(societyId, formDataToSend, 'faq')
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
                {Array.isArray(faqs) && faqs.length > 0 ? (
                    faqs.map((q, idx) =>
                        <div
                            key={idx}
                            onClick={() => isEditing && startEditing(q)}
                            className={isEditing ? "card-wrapper greyscale" : "card-wrapper"}
                        >
                            <Accordian title={q.question} content={q.answer} date={q.date} key={idx} />
                        </div>
                    )
                ) : (
                    <NothingHere />
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