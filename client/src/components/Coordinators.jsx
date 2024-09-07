import { useState } from "react";
import dummyData from "../../dummyData.json";
import CoordinatorCard from "./CoordinatorCard";
import "../styles/Coordinators.css";
import add from "../assets/add.svg";
import edit from "../assets/edit.svg";
import AddCoordinator from "./AddCoordinator";

function Coordinators() {
    const [coordinators, setCoordinators] = useState(dummyData.team);

    function handleAdd(formData) {
        
    }
    
    function handleEdit() {

    }

    return (
        <div className="coordinators-container">
            <div className="filler"></div>
            <div className="members-container">
                {coordinators.map((c, idx) => <CoordinatorCard info={c} key={idx} />)}
            </div>
            <div className="changes-container">
                <button onClick={handleAdd} className="change-button poppins-regular"><img src={add} alt="" className="icon"/>Add</button>
                <button onClick={handleEdit} className="change-button poppins-regular"><img src={edit}edit alt="" className="icon"/>Edit</button>
            </div>
        </div>
    );
}

export default Coordinators;