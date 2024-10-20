import Constants from "../constants/Constants";
import nothingHere from "../assets/nothing-here.jpg";

function NothingHere() {
    return (
        <div className="nothin-here-container">
            <img src={nothingHere} alt="" />
            <p className="poppins-thin">{Constants.NOTHING_HERE}</p>
        </div>
    );
}

export default NothingHere;