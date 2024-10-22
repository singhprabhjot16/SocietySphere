import { useState } from "react";
import linkedinIcon from "../assets/linkedin.svg";
import "../styles/CoordinatorCard.css";

function CoordinatorCard({ info, isEditingMode, onEdit }) {
    console.log('info: ', info)
    const [isHovered, setIsHovered] = useState(false);

    // Handle hover state to trigger editing in edit mode
    function handleMouseEnter() {
        if (isEditingMode) {
            setIsHovered(true);
        }
        else {
            setIsHovered(false);
        }
    }

    function handleMouseLeave() {
        setIsHovered(false);
    }

    return (
        <div 
            className={`card-container ${isEditingMode ? 'edit-mode' : ''} ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={isEditingMode ? onEdit : null} // Only trigger onClick if in edit mode
        >
            <img src={info.imageUrl} alt="" className="member-image"/>
            <div className="card-details-container">
                <p className="member-name poppins-medium">{info.student.name}</p>
                <p className="member-role poppins-regular">{info.memberRole}</p>
                <div className="socials">
                    <a href={info.linkedin_url} target="_blank" rel="noreferrer">
                        <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default CoordinatorCard;
