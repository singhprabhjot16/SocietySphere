import { useState } from "react";
import "../styles/AddCoordinator.css";

function AddCoordinator({ handleAdd, toggleFunction }) {
    const [formData, setFormData] = useState({
        image_url: "",
        member_name: "",
        member_role: "",
        linkedin: ""
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
    }

    return (
        <div className="add-container">
            <div className="add-card-container">
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        value={formData.name} 
                        placeholder="Name" 
                        onChange={handleChange} 
                        name="member_name" 
                    />
                    <input 
                        type="text" 
                        value={formData.role} 
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
                    <input type="file" onChange={handleChange} name="image_url" />
                    <button type="submit">Add</button>
                    <button type="button" onClick={toggleFunction}>Cancel</button>
                </form>
            </div>
        </div>
    );
}

export default AddCoordinator;
