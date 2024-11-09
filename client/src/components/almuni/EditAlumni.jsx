import { useState, useEffect } from "react";
import "../../styles/coordinators/EditCoordinator.css";

function EditAlumni({ selectedAlumni, handleEdit, handleDelete, toggleFunction }) {
    const [formData, setFormData] = useState({
        imageUrl: "",
        name: "",
        memberRole: "",
        linkedin: ""
    });
    // console.log("selected Alumni", selectedAlumni)
    // Populate the form with the selected coordinator's data
    useEffect(() => {
        if (selectedAlumni) {
            setFormData({
                image_url: selectedAlumni.image_url || "default value",
                member_name: selectedAlumni.name || "default value",
                member_role: selectedAlumni.memberRole || "default value",
                linkedin: selectedAlumni.linkedin || "default value"
            });
        }
    }, [selectedAlumni]);

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
        handleDelete(selectedAlumni); // Call delete function
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

export default EditAlumni;
