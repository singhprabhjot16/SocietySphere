import { useState, useEffect } from "react";
import "../styles/EditCoordinator.css";

function EditCoordinator({ selectedCoordinator, handleEdit, handleDelete, toggleFunction }) {
    const [formData, setFormData] = useState({
        imageUrl: "",
        student: {
            name: "",
        },
        memberRole: "",
        linkedin: ""
    });
    console.log("selected coordinator", selectedCoordinator)
    // Populate the form with the selected coordinator's data
    useEffect(() => {
        if (selectedCoordinator) {
            setFormData({
                image_url: selectedCoordinator.image_url || "default value",
                member_name: selectedCoordinator.student.name || "default value",
                member_role: selectedCoordinator.memberRole || "default value",
                linkedin: selectedCoordinator.linkedin || "default value"
            });
        }
    }, [selectedCoordinator]);

    function handleChange(event) {
        setFormData(oldData => ({
            ...oldData,
            [event.target.name]: event.target.value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        handleEdit(formData);
        toggleFunction(); // Close the modal after editing
    }

    function handleDeleteClick() {
        handleDelete(selectedCoordinator); // Call delete function
        toggleFunction(); // Close modal
    }

    

    return (
        <div className="edit-container">
            <div className="edit-card-container">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={formData.member_name}
                        placeholder="Name"
                        onChange={handleChange}
                        name="member_name"
                    />
                    <input
                        type="text"
                        value={formData.member_role}
                        placeholder="Role"
                        onChange={handleChange}
                        name="member_role"
                    />
                    <input
                        type="text"
                        value={formData.linkedin}
                        placeholder="LinkedIn Profile"
                        onChange={handleChange}
                        name="linkedin"
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

export default EditCoordinator;
