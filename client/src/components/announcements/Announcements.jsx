import { useState } from "react";
import Accordian from "../reusable/Accordion";
import "../../styles/faqs/FAQ.css";
import AppUtils from "../../utilities/AppUtils";
import NothingHere from "../reusable/NothingHere";
import AddAnnouncement from "./AddAnnouncement";
import EditAnnouncement from "./EditAnnouncement";
import addIcon from "../../assets/add.svg";
import editIcon from "../../assets/edit.svg";

function Announcements({ announcement, societyId }) {
    const [announcements, setAnnouncements] = useState(announcement);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

    function handleAdd(formData) {
        setAnnouncements(prevCoordinators => [...prevCoordinators, formData]);
        const modifiedFormData = {
            title: "",
            content: ""
        };

        const formDataToSend = new FormData();
        formDataToSend.append('title', formData.title);
        formDataToSend.append('content', formData.content);
        console.log(formDataToSend);
        
        // Send to the API
        AppUtils.updateSociety(societyId, formDataToSend, 'announcement');
        
        setIsAdding(false);
    }

    function toggleAddAnnouncement() {
        setIsAdding(!isAdding);
    }

    function toggleEditMode() {
        setIsEditing(!isEditing);
    }

    function handleEdit(updatedAnnouncement) {
        setAnnouncements(prevAnnouncements =>
            prevAnnouncements.map(announcement =>
                announcement.title === selectedAnnouncement.title ? updatedAnnouncement : announcement
            )
        );
        setIsEditing(false);
    }

    function handleDelete(announcementToDelete) {
        setAnnouncements(prevAnnouncements =>
            prevAnnouncements.filter(announcement => announcement !== announcementToDelete)
        );
        setIsEditing(false);
    }

    function startEditing(announcement) {
        setSelectedAnnouncement(announcement);
    }

    return (
        <div className="faqs-container">
            <div className="filler"></div>
            <div className="faq-container">
                {Array.isArray(announcements) && announcements.length > 0 ? (
                    announcements.map((q, idx) =>
                        <div
                            key={idx}
                            onClick={() => isEditing && startEditing(q)}
                            className={isEditing ? "card-wrapper greyscale" : "card-wrapper"}
                        >
                            <Accordian title={q.title} content={q.content} date={q.date} key={idx} />
                        </div>
                    )
                ) : (
                    <NothingHere />
                )}
            </div>
            <div className="changes-container">
                <button onClick={toggleAddAnnouncement} className="change-button poppins-regular">
                    <img src={addIcon} alt="Add" className="icon" /> Add
                </button>
                <button onClick={toggleEditMode} className="change-button poppins-regular">
                    <img src={editIcon} alt="Edit" className="icon" /> Edit
                </button>
            </div>
            {isAdding && <AddAnnouncement handleAdd={handleAdd} toggleFunction={toggleAddAnnouncement} />}
            {selectedAnnouncement && isEditing && (
                <EditAnnouncement
                    selectedFAQ={selectedAnnouncement}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                    toggleFunction={() => {
                        setIsEditing(false);
                        setSelectedAnnouncement(null);
                    }}
                />
            )}
        </div>
    );
}

export default Announcements;
