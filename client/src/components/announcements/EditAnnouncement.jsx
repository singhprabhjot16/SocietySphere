import { useState, useEffect } from "react";
import "../../styles/faqs/EditFAQ.css";

function EditAnnouncement({ selectedAnnouncement, handleEdit, handleDelete, toggleFunction }) {
    console.log(selectedAnnouncement);
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        date: ""
    });

    useEffect(() => {
        if (selectedAnnouncement) {
            setFormData({
                title: selectedAnnouncement.title || "",
                content: selectedAnnouncement.content || "",
                date: selectedAnnouncement.date || "",
                id: selectedAnnouncement.id || ""
            });
        }
    }, [selectedAnnouncement]);

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
        handleDelete(selectedAnnouncement);
        toggleFunction();
    }

    return (
        <div className="edit-container">
            <div className="edit-card-container">
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
                    <button type="button" onClick={handleDeleteClick} className="delete-button">Delete</button>
                    <button type="button" onClick={toggleFunction}>Cancel</button>
                </form>
            </div>
        </div>
    );
}

export default EditAnnouncement;