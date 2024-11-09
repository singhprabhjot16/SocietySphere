import { useState, useEffect } from "react";
import "../../styles/photo-gallery/EditPhoto.css";

function EditPhoto({ selectedPhoto, handleEdit, handleDelete, toggleFunction }) {
    const [formData, setFormData] = useState({
        caption: "",
        image_url: ""
    });

    useEffect(() => {
        if (selectedPhoto) {
            setFormData({
                caption: selectedAchievement.caption || "",
                image_url: selectedAchievement.image_url || ""
            });
        }
    }, [selectedPhoto]);

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
        handleDelete(selectedPhoto);
        toggleFunction();
    }

    return (
        <div className="edit-container">
            <div className="edit-card-container">
                <form onSubmit={handleSubmit}>
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

export default EditPhoto;