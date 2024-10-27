import { useState, useEffect } from "react";
import "../../styles/achievements/EditAchievement.css";

function EditAchievement({ selectedAchievement, handleEdit, handleDelete, toggleFunction }) {
    const [formData, setFormData] = useState({
        title: "",
        date: "",
        caption: "",
        image_url: ""
    });

    useEffect(() => {
        if (selectedAchievement) {
            setFormData({
                title: selectedAchievement.title || "",
                date: selectedAchievement.date || "",
                caption: selectedAchievement.caption || "",
                image_url: selectedAchievement.image_url || ""
            });
        }
    }, [selectedAchievement]);

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
        handleDelete(selectedAchievement);
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
                        value={formData.date}
                        placeholder="Date"
                        onChange={handleChange}
                        name="date"
                    />
                    <input
                        type="text"
                        value={formData.caption}
                        placeholder="Caption"
                        onChange={handleChange}
                        name="caption"
                    />
                    <input
                        type="file"
                        onChange={handleChange}
                        name="image_url"
                    />
                    <button type="submit">Save</button>
                    <button type="button" onClick={handleDeleteClick} className="delete-button">Delete</button>
                    <button type="button" onClick={toggleFunction}>Cancel</button>
                </form>
            </div>
        </div>
    );
}

export default EditAchievement;