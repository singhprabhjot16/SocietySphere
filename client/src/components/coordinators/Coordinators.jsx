import { useState } from "react";
import dummyData from "../../../dummyData.json";
import CoordinatorCard from "./CoordinatorCard";
import "../../styles/coordinators/Coordinators.css";
import add from "../../assets/add.svg";
import edit from "../../assets/edit.svg";
import AddCoordinator from "./AddCoordinator";
import EditCoordinator from "./EditCoordinator";
import AppUtils from "../../utilities/AppUtils";
import NothingHere from "../reusable/NothingHere";

function Coordinators({ teams, societyId}) {
    const [coordinators, setCoordinators] = useState(teams);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedCoordinator, setSelectedCoordinator] = useState(null);

    function handleAdd(formData) {
        setCoordinators(prevCoordinators => [...prevCoordinators, formData]);
        const modifiedFormData = {
            imageUrl: "",
            name: "",
            memberRole: "",
            // linkedin: ""
            rollNo: ""
        };

        // modifiedFormData.imageUrl = formData.imageUrl
        // modifiedFormData.name = formData.student.name
        // modifiedFormData.memberRole = formData.memberRole
        // modifiedFormData.rollNo = formData.rollNo
        const formDataToSend = new FormData();
        formDataToSend.append('memberRole', formData.memberRole);
        formDataToSend.append('rollNo', formData.rollNo);
        formDataToSend.append('name', formData.student.name);
        formDataToSend.append('imageUrl', formData.imageUrl);
        console.log(formDataToSend)
        // AppUtils.updateSociety(societyId, modifiedFormData, 'team')
        AppUtils.updateSociety(societyId, formDataToSend, 'team')
        setIsAdding(false);
    }

    function toggleAddCoordinator() {
        setIsAdding(!isAdding);
    }

    function toggleEditMode() {
        setIsEditing(!isEditing);
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
                              onClick={() => isEditing && startEditing(c)}
                              className={isEditing ? "card-wrapper greyscale" : "card-wrapper"}
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
                        setSelectedCoordinator(null);
                    }}
                />
            )}
        </div>
    );
}

export default Coordinators;