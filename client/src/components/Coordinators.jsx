import { useState } from "react";
import dummyData from "../../dummyData.json";
import CoordinatorCard from "./CoordinatorCard";
import "../styles/Coordinators.css";
import add from "../assets/add.svg";
import edit from "../assets/edit.svg";
import AddCoordinator from "./AddCoordinator";
import AppUtils from "../utilities/AppUtils";
import nothingHere from "../assets/nothing-here.jpg";
import NothingHere from "./NothingHere";

function Coordinators({ teams }) {
    const [coordinators, setCoordinators] = useState(teams);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    function handleAdd(formData) {
        setCoordinators(prevCoordinators => [...prevCoordinators, formData]);
        setIsAdding(false);
    }
    
    function toggleAddCoordinator() {
        setIsAdding(!isAdding);
    }

    function handleEdit() {
        setIsEditing(true);
    }

    return (
        <div className="coordinators-container">
            <div className="filler"></div>
            <div className="members-container">
                {!AppUtils.checkEmpty(coordinators) ? 
                coordinators.map((c, idx) => <CoordinatorCard info={c} key={idx} />) :
                <NothingHere />
                }
            </div>
            <div className="changes-container">
                <button onClick={toggleAddCoordinator} className="change-button poppins-regular">
                    <img src={add} alt="Add" className="icon"/>Add
                </button>
                <button onClick={handleEdit} className="change-button poppins-regular">
                    <img src={edit} alt="Edit" className="icon"/>Edit
                </button>
            </div>

            {isAdding && <AddCoordinator handleAdd={handleAdd} toggleFunction={toggleAddCoordinator}/>}
        </div>
    );
}

export default Coordinators;