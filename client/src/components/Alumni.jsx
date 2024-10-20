import { useState } from "react";
import dummyData from "../../dummyData.json";
import CoordinatorCard from "./CoordinatorCard";
import "../styles/Coordinators.css";
import add from "../assets/add.svg";
import edit from "../assets/edit.svg";
import AddCoordinator from "./AddCoordinator";
import AppUtils from "../utilities/AppUtils";
import NothingHere from "./NothingHere"; 

function Alumni() {
    const [alumni, setAlumni] = useState(dummyData.alumni); 
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    function handleAdd(formData) {
        setAlumni(prevAlumni => [...prevAlumni, formData]);
        setIsAdding(false);
    }
    
    function toggleAddAlumni() {
        setIsAdding(!isAdding);
    }

    function handleEdit() {
        setIsEditing(true);
    }

    return (
        <div className="coordinators-container">
            <div className="filler"></div>
            <div className="members-container">
                {!AppUtils.checkEmpty(alumni) ? 
                alumni.map((a, idx) => <CoordinatorCard info={a} key={idx} />) : 
                <NothingHere />
                }
            </div>
            <div className="changes-container">
                <button onClick={toggleAddAlumni} className="change-button poppins-regular">
                    <img src={add} alt="Add" className="icon"/>Add
                </button>
                <button onClick={handleEdit} className="change-button poppins-regular">
                    <img src={edit} alt="Edit" className="icon"/>Edit
                </button>
            </div>

            {isAdding && <AddCoordinator handleAdd={handleAdd} toggleFunction={toggleAddAlumni}/>}
        </div>
    );
}

export default Alumni;
