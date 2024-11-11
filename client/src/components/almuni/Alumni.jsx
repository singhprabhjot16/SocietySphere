import { useState } from "react";
import dummyData from "../../../dummyData.json";
import AlumniCard from "./AlumniCard";
import "../../styles/coordinators/Coordinators.css";
import add from "../../assets/add.svg";
import edit from "../../assets/edit.svg";
import AddAlumni from "./AddAlumni";
import EditAlumni from "./EditAlumni";
import AppUtils from "../../utilities/AppUtils";
import NothingHere from "../reusable/NothingHere";

function Alumni({ alumnis, societyId, isLogin, isSocietyHead }) {
    const [alumni, setAlumni] = useState(alumnis);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedAlumni, setSelectedAlumni] = useState(null);

    function handleAdd(formData) {
        setAlumni(prevCoordinators => [...prevCoordinators, formData]);
        const modifiedFormData = {
            imageUrl: "",
            name: "",
            memberRole: "",
            linkedin: "",
            rollNo: ""
        };

        // modifiedFormData.imageUrl = formData.imageUrl
        // modifiedFormData.name = formData.student.name
        // modifiedFormData.memberRole = formData.memberRole
        // modifiedFormData.rollNo = formData.rollNo
        const formDataToSend = new FormData();
        formDataToSend.append('role', formData.memberRole);
        formDataToSend.append('rollNo', formData.rollNo);
        formDataToSend.append('name', formData.student.name);
        formDataToSend.append('imageUrl', formData.imageUrl);
        formDataToSend.append('linkedin', formData.linkedin);
        console.log(formDataToSend)
        // for (const value of formData.values()) {
        //     console.log(value);
        // }
        // AppUtils.updateSociety(societyId, modifiedFormData, 'team')
        AppUtils.updateSociety(societyId, formDataToSend, 'alumni')
        setIsAdding(false);
    }

    function toggleAddAlumni() {
        setIsAdding(!isAdding);
    }

    function toggleEditMode() {
        setIsEditing(!isEditing);
    }

    function handleEdit(updatedAlumni) {
        setAlumni(prevAlumni =>
            prevAlumni.map(c =>
                c.member_name === selectedAlumni.member_name ? updatedAlumni : c
            )
        );
        setIsEditing(false);
    }

    function handleDelete(alumniToDelete) {
        setAlumni(prevAlumni =>
            prevAlumni.filter(c => c !== alumniToDelete)
        );
        setIsEditing(false);
    }

    function startEditing(alm) {
        setSelectedAlumni(alm);
    }

    return (
        <div className="coordinators-container">
            <div className="filler"></div>
            <div className="members-container">
                {!AppUtils.checkEmpty(alumni)
                    ? alumni.map((c, idx) => (
                        <div
                            key={idx}
                            onClick={() => isEditing && startEditing(c)}
                            className={isEditing ? "card-wrapper greyscale" : "card-wrapper"}
                        >
                            <AlumniCard info={c} key={idx} />
                        </div>
                    ))
                    : <NothingHere />
                }
            </div>

            {isLogin && isSocietyHead && <div className="changes-container">
                <button onClick={toggleAddAlumni} className="change-button poppins-regular">
                    <img src={add} alt="Add" className="icon" /> Add
                </button>
                <button onClick={toggleEditMode} className="change-button poppins-regular">
                    <img src={edit} alt="Edit" className="icon" /> Edit
                </button>
            </div>}

            {isAdding && <AddAlumni handleAdd={handleAdd} toggleFunction={toggleAddAlumni} />}
            {selectedAlumni && isEditing && (
                <EditAlumni
                    selectedAlumni={selectedAlumni}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                    toggleFunction={() => {
                        setIsEditing(false);
                        setSelectedAlumni(null);
                    }}
                />
            )}
        </div>
    );
}

export default Alumni;
