import { useState, useEffect } from "react";
import "../../styles/coordinators/EditCoordinator.css";

function EditCoordinator({ selectedCoordinator, handleEdit, handleDelete, toggleFunction }) {
    const [formData, setFormData] = useState({
        imageUrl: null,
        student: {
            name: "",
        },
        memberRole: "",
        linkedIn: ""
    });
    console.log("selected coordinator", selectedCoordinator)
    // Populate the form with the selected coordinator's data
    useEffect(() => {
        if (selectedCoordinator) {
            setFormData({
                image_url: selectedCoordinator.image_url || null,
                name: selectedCoordinator.student.name || "default value",
                memberRole: selectedCoordinator.memberRole || "default value",
                rollNo: selectedCoordinator.rollNo || "default value",
                id: selectedCoordinator.id || "default value"
            });
        }
    }, [selectedCoordinator]);

    const handleFileChange = (event) => {
        setFormData((prevData) => ({
            ...prevData,
            imageUrl: event.target.files[0] 
        }));
    };

    function handleChange(event) {
        setFormData(oldData => ({
            ...oldData,
            [event.target.name]: event.target.value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        handleEdit({...formData, id: selectedCoordinator?.id});
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
                        value={formData.name}
                        placeholder="Name"
                        onChange={handleChange}
                        name="name"
                    />
                    <input
                        type="text"
                        value={formData.memberRole}
                        placeholder="Role"
                        onChange={handleChange}
                        name="memberRole"
                    />
                    <input
                        type="text"
                        value={formData.linkedin}
                        placeholder="LinkedIn Profile"
                        onChange={handleChange}
                        name="linkedin"
                    />
                    <input type="file" onChange={handleFileChange} name="imageUrl" />
                    <button type="submit">Save</button>
                    <button type="button" onClick={handleDeleteClick} className="delete-button">Delete</button>
                    <button type="button" onClick={toggleFunction}>Cancel</button>
                </form>
            </div>
        </div>
    );
}

export default EditCoordinator;
