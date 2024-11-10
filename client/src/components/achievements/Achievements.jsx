import { useState } from "react";
import AchievementCard from "./AchievementCard";
import AddAchievement from "./AddAchievement";
import EditAchievement from "./EditAchievement";
import "../../styles/achievements/Achievements.css";
import add from "../../assets/add.svg";
import edit from "../../assets/edit.svg";
import NothingHere from "../reusable/NothingHere";
import AppUtils from "../../utilities/AppUtils";

function Achievements({ achievement, societyId, isLogin }) {
    const [achievements, setAchievements] = useState(achievement);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedAchievement, setSelectedAchievement] = useState(null);

    function toggleAddAchievement() {
        setIsAdding(!isAdding);
    }

    function handleAddAchievement(newAchievement) {
        setAchievements(prevAchievements => [...prevAchievements, newAchievement]);
        const formDataToSend = new FormData();
        formDataToSend.append('title', newAchievement.title);
        formDataToSend.append('caption', newAchievement.caption);
        formDataToSend.append('description', newAchievement.description);
        formDataToSend.append('imageUrl', newAchievement.imageUrl);
        console.log("form data to send", formDataToSend, societyId);
        AppUtils.updateSociety(societyId, formDataToSend, 'achievement');
    }

    function toggleEditAchievement() {
        setIsEditing(!isEditing);
    }

    function handleEditAchievement(updatedAchievement) {
        setAchievements(prevAchievements =>
            prevAchievements.map(ach =>
                ach.id === selectedAchievement.id ? updatedAchievement : ach
            )
        );
    }

    function handleDeleteAchievement(achievementToDelete) {
        setAchievements(prevAchievements =>
            prevAchievements.filter(ach => ach.id !== achievementToDelete.id)
        );
    }

    return (
        <div className="achievements-container">
            <div className="filler"></div>
            
            <div className="achievement-container">
                {!AppUtils.checkEmpty(achievements) ? (
                    achievements.map((achievement, idx) => (
                        <AchievementCard
                            key={idx}
                            achievement={achievement}
                        />
                    ))
                ) : (
                    <NothingHere />
                )}
            </div>

            {isLogin && <div className="changes-container">
                <button onClick={toggleAddAchievement} className="change-button poppins-regular">
                    <img src={add} alt="Add" className="icon" /> Add
                </button>
                <button onClick={toggleEditAchievement} className="change-button poppins-regular">
                    <img src={edit} alt="Edit" className="icon" /> Edit
                </button>
            </div>}

            {isAdding && (
                <AddAchievement
                    handleAdd={handleAddAchievement}
                    toggleFunction={toggleAddAchievement}
                />
            )}

            {isEditing && selectedAchievement && (
                <EditAchievement
                    selectedAchievement={selectedAchievement}
                    handleEdit={handleEditAchievement}
                    handleDelete={handleDeleteAchievement}
                    toggleFunction={() => toggleEditAchievement(null)} // Close the edit form
                />
            )}
        </div>
    );
}

export default Achievements;
