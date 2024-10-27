import "../../styles/about-us/About.css";
import AppUtils from "../../utilities/AppUtils";
import dummyData from "../../../dummyData.json";
import NothingHere from "../reusable/NothingHere";

function About({ about }) {
    return (
        <div className="about-container">
            <div className="filler">basjkvdbj</div>
            <div className="about-container">
                {!AppUtils.checkEmpty(about) ? about : <NothingHere />}
            </div>
            <p></p>
        </div>
    );
}

export default About;