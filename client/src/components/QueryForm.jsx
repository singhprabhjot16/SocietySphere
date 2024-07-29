import { useState } from "react";
import "../styles/index.css";
import "../styles/QueryForm.css";

function QueryForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        query: ""
    });

    function handleChange(event) {
        setFormData((prevData) => {
            const name = event.target.name;
            const value = event.target.value;
            return {...prevData, [name]: value};
        });
    }

    return (
        <div className="query-form-container div-padding">
            <form action="POST" className="query-form">
                <p className="form-headline poppins-medium">Have a question? Feel free to ask
                and we will get back to you.</p>
                <input type="text" onChange={handleChange} value={formData.name} name="name" placeholder="Name" className="poppins-regular input-field" required/>
                <input type="email" onChange={handleChange} value={formData.email} name="email" placeholder="Email" className="poppins-regular input-field" required/>
                <textarea type="" onChange={handleChange} value={formData.query} name="query" placeholder="Query" className="poppins-regular input-field" required/>
                <button type="submit" className="submit-button poppins-regular">Submit</button>
            </form>
        </div>
    );
}

export default QueryForm;