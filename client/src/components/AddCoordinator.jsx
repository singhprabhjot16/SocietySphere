import { useState } from "react"

function AddCoordinator({handleAdd}) {
    const [formData, setFormData] = useState({});

    function handleChange(event) {
        setFormData(oldData => {
            return {...oldData, [event.target.name]: event.target.value};
        });
    }

    return (
        <div className="add-container">
            <div className="add-card-container">
                <form action="" method="POST">
                    <input type="file" value={formData.image} onChange={handleChange} name="image"/>
                    <input type="text" value={formData.name} placeholder="Name" onChange={handleChange} name="name"/>
                    <input type="text" value={formData.role} placeholder="Role" onChange={handleChange} name="role"/>
                    <input type="text" value={formData.linkedin} placeholder="LinkedIn Profile" onChange={handleChange} name="linkedin"/>
                    <button onClick={() => handleAdd(formData)}>Add</button>
                    <button>Cancel</button>
                </form>
            </div>
        </div>
    )
}

export default AddCoordinator;