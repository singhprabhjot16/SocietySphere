import { useState } from "react";
import "../../styles/faqs/AddFAQ.css";

function AddAnnouncement({ handleAdd, toggleFunction }) {
    const [formData, setFormData] = useState({
        title: "",
        content: "",
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
                        value={formData.title}
                        placeholder="Title"
                        onChange={handleChange}
                        name="title"
                    />
                    <input
                        type="text"
                        value={formData.content}
                        placeholder="Content"
                        onChange={handleChange}
                        name="content"
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

export default AddAnnouncement;