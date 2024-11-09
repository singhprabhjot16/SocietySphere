import { useState } from "react";
import "../../styles/index.css";
import "../../styles/reusable/QueryForm.css";
import Constants from "../../constants/Constants";

function QueryForm() {
    const [result, setResult] = useState("Submit");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", Constants.QUERY_FORM_API_KEY);
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        setTimeout(() => {
          setResult("Submit");
        }, 3000);
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
        setTimeout(() => {
          setResult("Submit");
        }, 3000);
      }
    };
  
    return (
        <div className="query-form-container div-padding">
            <form onSubmit={onSubmit}>
                <p className="form-headline poppins-medium">Have a question? Feel free to ask
                and we will get back to you.</p>
                <input type="text" name="name" placeholder="Name" className="poppins-regular input-field" required/>
                <input type="email" name="email" placeholder="Email" className="poppins-regular input-field" required/>
                <textarea type="" name="query" placeholder="Query" className="poppins-regular input-field" required/>
                <button disabled={result === "Submit" ? false : true} type="submit" className={`submit-button poppins-regular`}>{result}</button>
            </form>
          {/* <span className="result poppins-medium">{result}</span> */}
      </div>
    );
  }

  export default QueryForm;