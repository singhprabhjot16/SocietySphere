import { useState, useEffect } from "react";
import "../../styles/faqs/EditFAQ.css";

function EditFAQ({ selectedFAQ, handleEdit, handleDelete, toggleFunction }) {
    const [formData, setFormData] = useState({
        question: "",
        answer: "",
        date: ""
    });

    useEffect(() => {
        if (selectedFAQ) {
            setFormData({
                question: selectedFAQ.question || "",
                answer: selectedFAQ.answer || "",
                date: selectedFAQ.date || "",
                id: selectedFAQ.id || ""
            });
        }
    }, [selectedFAQ]);

    function handleChange(event) {
        setFormData(oldData => ({
            ...oldData,
            [event.target.name]: event.target.value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        handleEdit(formData);
        toggleFunction();
    }

    function handleDeleteClick() {
        handleDelete(selectedFAQ);
        toggleFunction();
    }

    return (
        <div className="edit-container">
            <div className="edit-card-container">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={formData.question}
                        placeholder="Question"
                        onChange={handleChange}
                        name="question"
                    />
                    <input
                        type="text"
                        value={formData.answer}
                        placeholder="Answer"
                        onChange={handleChange}
                        name="answer"
                    />
                    <input
                        type="text"
                        value={formData.date}
                        placeholder="Date"
                        onChange={handleChange}
                        name="date"
                    />
                    <button type="submit">Save</button>
                    <button type="button" onClick={handleDeleteClick} className="delete-button">Delete</button>
                    <button type="button" onClick={toggleFunction}>Cancel</button>
                </form>
            </div>
        </div>
    );
}

export default EditFAQ;