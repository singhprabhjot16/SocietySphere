import { useState } from "react";

function AddAbout({ handleAdd, toggleFunction }) {
    const [formData, setFormData] = useState({
        name: '',
        aboutSociety: '',
        prerequisites: '',
        societyHead: '',
        adminEmail: ''
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    function handleSubmit() {
        handleAdd(formData);
    }

    return (
        <div>
            <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
            <textarea name="aboutSociety" placeholder="About Society" value={formData.aboutSociety} onChange={handleChange} />
            <textarea name="prerequisites" placeholder="Prerequisites" value={formData.prerequisites} onChange={handleChange} />
            <input name="societyHead" placeholder="Society Head" value={formData.societyHead} onChange={handleChange} />
            <input name="adminEmail" placeholder="Admin Email" value={formData.adminEmail} onChange={handleChange} />
            <button onClick={handleSubmit}>Save</button>
            <button onClick={toggleFunction}>Cancel</button>
        </div>
    );
}

export default AddAbout;
