import { useState } from "react";
import "../../styles/coordinators/AddCoordinator.css";

function AddCoordinator({ handleAdd, toggleFunction }) {
    const [formData, setFormData] = useState({
        imageUrl: "",
        student: {
            name: "",
        },
        memberRole: "",
        // linkedin: ""
        rollNo: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        if (name === "student.name") {
            setFormData((oldData) => ({
                ...oldData,
                student: {
                    ...oldData.student,
                    name: value
                }
            }));
        } else {
            setFormData((oldData) => ({
                ...oldData,
                [name]: value
            }));
        }
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
                        value={formData.student.name} 
                        placeholder="Name" 
                        onChange={handleChange} 
                        name="student.name" 
                    />
                    <input 
                        type="text" 
                        value={formData.memberRole} 
                        placeholder="Role" 
                        onChange={handleChange} 
                        name="memberRole" 
                    />
                    {/* <input 
                        type="text" 
                        value={formData.linkedin} 
                        placeholder="LinkedIn Profile" 
                        onChange={handleChange} 
                        name="linkedin" 
                    /> */}

                    <input 
                        type="text" 
                        value={formData.rollNo} 
                        placeholder="Roll Number" 
                        onChange={handleChange} 
                        name="rollNo" 
                    />
                    <input type="file" onChange={handleChange} name="imageUrl" />
                    <button type="submit">Add</button>
                    <button type="button" onClick={toggleFunction}>Cancel</button>
                </form>
            </div>
        </div>
    );
}

export default AddCoordinator;
