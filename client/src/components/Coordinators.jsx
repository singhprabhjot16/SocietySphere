import dummyData from "../../dummyData.json";
import CoordinatorCard from "./CoordinatorCard";
import "../styles/Coordinators.css";

function Coordinators() {
    const coordinators = dummyData.team;
    return (
        <div className="coordinators-container">
            <div className="filler">
                
            </div>
            <div className="members-container">
                {coordinators.map((c, idx) => <CoordinatorCard info={c} key={idx} />)}
            </div>
        </div>
    );
}

export default Coordinators;