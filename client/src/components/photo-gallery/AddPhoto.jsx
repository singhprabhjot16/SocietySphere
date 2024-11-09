import { useState } from "react";
import "../../styles/photo-gallery/AddPhoto.css";

function AddPhoto({ handleAdd, toggleFunction }) {
    const [formData, setFormData] = useState({
        caption: "",
        imageUrl: null
    });

    function handleChange(event) {
        setFormData(oldData => ({
            ...oldData,
            [event.target.name]: event.target.value
        }));
    }

    const handleFileChange = (event) => {
        setFormData((prevData) => ({
            ...prevData,
            imageUrl: event.target.files[0] 
        }));
    };

    function handleSubmit(event) {
        event.preventDefault();
        handleAdd(formData);
        toggleFunction();
    }

    return (
        <div className="add-container">
            <div className="add-card-container">
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
                        onChange={handleFileChange}
                        name="imageUrl"
                    />
                    <button type="submit">Save</button>
                    <button type="button" onClick={toggleFunction}>Cancel</button>
                </form>
            </div>
        </div>
    );
}

export default AddPhoto;