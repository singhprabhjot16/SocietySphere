import { useState } from "react";
import Accordian from "./Accordion";
import "../styles/FAQ.css";
import dummyData from "../../dummyData.json";
import AddAnnouncement from "./AddAnnouncement"; // Import AddAnnouncement component
import EditAnnouncement from "./EditAnnouncement"; // Import EditAnnouncement component
import addIcon from "../assets/add.svg";
import editIcon from "../assets/edit.svg";

function Announcements() {
    const [announcements, setAnnouncements] = useState(dummyData.announcements);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

    function handleAdd(formData) {
        setAnnouncements(prevAnnouncements => [...prevAnnouncements, formData]);
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
                {announcements.map((announcement, idx) => 
                    <div
                        key={idx}
                        onClick={() => isEditing && startEditing(announcement)}
                        className={isEditing ? "card-wrapper greyscale" : "card-wrapper"}
                    >
                        <Accordian title={announcement.title} content={announcement.content} date={announcement.date} key={idx}/>
                    </div>
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
                    selectedAnnouncement={selectedAnnouncement}
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