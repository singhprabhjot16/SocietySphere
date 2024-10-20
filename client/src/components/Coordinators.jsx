import { useState } from "react";
import dummyData from "../../dummyData.json";
import CoordinatorCard from "./CoordinatorCard";
import "../styles/Coordinators.css";
import add from "../assets/add.svg";
import edit from "../assets/edit.svg";
import AddCoordinator from "./AddCoordinator";
import EditCoordinator from "./EditCoordinator";
import AppUtils from "../utilities/AppUtils";
import NothingHere from "./NothingHere";

function Coordinators({ teams }) {
    const [coordinators, setCoordinators] = useState(teams);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditingMode, setIsEditingMode] = useState(false); // To enable edit mode
    const [selectedCoordinator, setSelectedCoordinator] = useState(null); // The selected coordinator for editing

    // Handle adding a new coordinator
    function handleAdd(formData) {
        setCoordinators(prevCoordinators => [...prevCoordinators, formData]);
        setIsAdding(false);
    }

    // Toggle Add modal
    function toggleAddCoordinator() {
        setIsAdding(!isAdding);
    }

    // Toggle Edit mode
    function toggleEditMode() {
        setIsEditingMode(!isEditingMode);
    }

    // Open edit modal and set the selected coordinator
    function handleEdit(coordinator) {
        setSelectedCoordinator(coordinator);
    }

    // Handle updating an existing coordinator
    function handleUpdate(updatedCoordinator) {
        setCoordinators(prevCoordinators => 
            prevCoordinators.map(c => 
                c.id === updatedCoordinator.id ? updatedCoordinator : c
            )
        );
        setSelectedCoordinator(null); // Close edit modal
    }

    // Handle deleting a coordinator
    function handleDelete(coordinatorId) {
        setCoordinators(prevCoordinators => prevCoordinators.filter(c => c.id !== coordinatorId));
        setSelectedCoordinator(null); // Close edit modal
    }

    return (
        <div className="coordinators-container">
            <div className="filler"></div>
            <div className="members-container">
                {!AppUtils.checkEmpty(coordinators) ? 
                coordinators.map((c, idx) => (
                    <CoordinatorCard 
                        info={c} 
                        key={idx} 
                        isEditingMode={isEditingMode}  // Pass editing mode status
                        onEdit={() => handleEdit(c)}  // Handle edit on hover
                    />
                )) :
                <NothingHere />
                }
            </div>
            <div className="changes-container">
                <button onClick={toggleAddCoordinator} className="change-button poppins-regular">
                    <img src={add} alt="Add" className="icon"/>Add
                </button>
                <button onClick={toggleEditMode} className="change-button poppins-regular">
                    <img src={edit} alt="Edit" className="icon"/>Edit
                </button>
            </div>

            {isAdding && <AddCoordinator handleAdd={handleAdd} toggleFunction={toggleAddCoordinator} />}
            
            {/* Edit modal opens if a card is selected */}
            {selectedCoordinator && 
                <EditCoordinator
                    coordinator={selectedCoordinator} 
                    handleUpdate={handleUpdate} 
                    handleDelete={handleDelete} 
                />
            }
        </div>
    );
}

export default Coordinators;
