import { useState } from "react";
import "../../styles/coordinators/AddCoordinator.css";

function AddAlumni({ handleAdd, toggleFunction }) {
    const [formData, setFormData] = useState({
        imageUrl: null,
        student: {
            name: "",
        },
        memberRole: "",
        linkedIn: "",
        rollNo: ""
    });

    const handleFileChange = (event) => {
        setFormData((prevData) => ({
            ...prevData,
            imageUrl: event.target.files[0]
        }));
    };
    

    function handleChange(event) {
        const { name, value } = event.target;
        console.log(name, value);

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
                    <input 
                        type="text" 
                        value={formData.rollNo} 
                        placeholder="Roll Number" 
                        onChange={handleChange} 
                        name="rollNo" 
                    />
                    <input 
                        type="text" 
                        value={formData.linkedIn} 
                        placeholder="LinkedIn Profile" 
                        onChange={handleChange} 
                        name="linkedIn" 
                    />
                    <input type="file" onChange={handleFileChange} name="imageUrl" />
                    <button type="submit">Add</button>
                    <button type="button" onClick={toggleFunction}>Cancel</button>
                </form>
            </div>
        </div>
    );
}

export default AddAlumni;
