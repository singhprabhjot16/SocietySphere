import { useState } from "react";
import "../styles/AddFAQ.css";

function AddFAQ({ handleAdd, toggleFunction }) {
    const [formData, setFormData] = useState({
        question: "",
        answer: "",
        date: ""
    });

    function handleChange(event) {
        setFormData(oldData => ({
            ...oldData,
            [event.target.name]: event.target.value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        handleAdd(formData);
        toggleFunction();
    }

    return (
        <div className="add-container">
            <div className="add-card-container">
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
                    <button type="button" onClick={toggleFunction}>Cancel</button>
                </form>
            </div>
        </div>
    );
}

export default AddFAQ;