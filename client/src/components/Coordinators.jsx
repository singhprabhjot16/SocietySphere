import { useState } from "react";
import dummyData from "../../dummyData.json";
import CoordinatorCard from "./CoordinatorCard";
import "../styles/Coordinators.css";
import add from "../assets/add.svg";
import edit from "../assets/edit.svg";
import AddCoordinator from "./AddCoordinator";
import EditCoordinator from "./EditCoordinator"; // Import EditCoordinator
import AppUtils from "../utilities/AppUtils";
import nothingHere from "../assets/nothing-here.jpg";
import NothingHere from "./NothingHere";

function Coordinators() {
    const [coordinators, setCoordinators] = useState(dummyData.team);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false); // Track editing state
    const [selectedCoordinator, setSelectedCoordinator] = useState(null);

    function handleAdd(formData) {
        setCoordinators(prevCoordinators => [...prevCoordinators, formData]);
        setIsAdding(false);
    }

    function toggleAddCoordinator() {
        setIsAdding(!isAdding);
    }

    function toggleEditMode() {
        setIsEditing(!isEditing); // Toggle edit mode
    }

    function handleEdit(updatedCoordinator) {
        setCoordinators(prevCoordinators =>
            prevCoordinators.map(c =>
                c.member_name === selectedCoordinator.member_name ? updatedCoordinator : c
            )
        );
        setIsEditing(false);
    }

    function handleDelete(coordinatorToDelete) {
        setCoordinators(prevCoordinators =>
            prevCoordinators.filter(c => c !== coordinatorToDelete)
        );
        setIsEditing(false);
    }

    function startEditing(coordinator) {
        setSelectedCoordinator(coordinator);
    }

    return (
        <div className="coordinators-container">
            <div className="filler"></div>
            <div className="members-container">
                {!AppUtils.checkEmpty(coordinators)
                    ? coordinators.map((c, idx) => (
                          <div
                              key={idx}
                              onClick={() => isEditing && startEditing(c)} // Only allow click in edit mode
                              className={isEditing ? "card-wrapper greyscale" : "card-wrapper"} // Add greyscale class when editing
                          >
                              <CoordinatorCard info={c} key={idx} />
                          </div>
                      ))
                    : <NothingHere />
                }
            </div>
            <div className="changes-container">
                <button onClick={toggleAddCoordinator} className="change-button poppins-regular">
                    <img src={add} alt="Add" className="icon" /> Add
                </button>
                <button onClick={toggleEditMode} className="change-button poppins-regular">
                    <img src={edit} alt="Edit" className="icon" /> Edit
                </button>
            </div>

            {isAdding && <AddCoordinator handleAdd={handleAdd} toggleFunction={toggleAddCoordinator} />}
            {selectedCoordinator && isEditing && (
                <EditCoordinator
                    selectedCoordinator={selectedCoordinator}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                    toggleFunction={() => {
                        setIsEditing(false);
                        setSelectedCoordinator(null); // Reset selected coordinator when closing
                    }}
                />
            )}
        </div>
    );
}

export default Coordinators;
