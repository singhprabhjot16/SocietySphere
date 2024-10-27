import { useState } from "react";
import "../../styles/achievements/AddAchievement.css";

function AddAchievement({ handleAdd, toggleFunction }) {
    const [formData, setFormData] = useState({
        title: "",
        date: "",
        caption: "",
        image_url: ""
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
        toggleFunction();
    }

    return (
        <div className="add-container">
            <div className="add-card-container">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={formData.title}
                        placeholder="Title"
                        onChange={handleChange}
                        name="title"
                    />
                    <input
                        type="text"
                        value={formData.date}
                        placeholder="Date"
                        onChange={handleChange}
                        name="date"
                    />
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
                    <button type="button" onClick={toggleFunction}>Cancel</button>
                </form>
            </div>
        </div>
    );
}

export default AddAchievement;