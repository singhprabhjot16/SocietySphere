import { useState } from "react";
import "../../styles/about-us/About.css";
import "../../styles/about-us/AddAbout.css"
import "../../styles/about-us/EditAbout.css"
import AppUtils from "../../utilities/AppUtils";
import NothingHere from "../reusable/NothingHere";
import AddAbout from "./AddAbout";
import EditAbout from "./EditAbout"; 

function About({ about, societyId }) {
    const [aboutData, setAboutData] = useState(about);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    function handleAdd(newAbout) {
        setAboutData(newAbout);
        AppUtils.updateSociety(societyId, newAbout, 'about');
        setIsAdding(false);
    }

    function handleEdit(updatedAbout) {
        setAboutData(updatedAbout);
        AppUtils.updateSociety(societyId, updatedAbout, 'about');
        setIsEditing(false);
    }

    function toggleAddMode() {
        setIsAdding(!isAdding);
    }

    function toggleEditMode() {
        setIsEditing(!isEditing);
    }

    return (
        <div className="about-container-parent">
            <div className="filler"></div>
            <div className="about-container">
                {!AppUtils.checkEmpty(aboutData) ? (
                    <>
                        <div className="about-society">
                            <p className="about-society-heading poppins-medium">About {aboutData?.name}</p>
                            <p className="about-society-content poppins-regular">{aboutData?.aboutSociety}</p>
                        </div>
                        <div className="prerequisites">
                            <p className="prerequisites-heading poppins-medium">Prerequisites</p>
                            <p className="prerequisites-content poppins-regular">{aboutData?.prerequisites}</p>
                        </div>
                        <div className="contact">
                            <p className="contact-heading poppins-medium">Contact</p>
                            <p className="contact-content poppins-regular">
                                {aboutData?.societyHead}&nbsp;({aboutData?.adminEmail})
                            </p>
                        </div>
                    </>
                ) : (
                    <NothingHere />
                )}
            </div>

            <div className="changes-container">
                {AppUtils.checkEmpty(aboutData) ? (
                    <button onClick={toggleAddMode} className="change-button poppins-regular">
                        Add
                    </button>
                ) : (
                    <button onClick={toggleEditMode} className="change-button poppins-regular">
                        Edit
                    </button>
                )}
            </div>

            {isAdding && (
                <div className="edit-container">
                    <div className="edit-card-container">
                        <AddAbout handleAdd={handleAdd} toggleFunction={toggleAddMode} />
                    </div>
                </div>
            )}
            {isEditing && (
                <div className="edit-container">
                    <div className="edit-card-container">
                        <EditAbout aboutData={aboutData} handleEdit={handleEdit} toggleFunction={toggleEditMode} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default About;
