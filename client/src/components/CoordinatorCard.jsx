import { useState } from "react";
import linkedinIcon from "../assets/linkedin.svg";
import "../styles/CoordinatorCard.css";

function CoordinatorCard({ info, isEditingMode, onEdit }) {
    const [isHovered, setIsHovered] = useState(false);

    // Handle hover state to trigger editing in edit mode
    function handleMouseEnter() {
        if (isEditingMode) {
            setIsHovered(true);
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
            <img src={info.image_url} alt="" className="member-image" />
            <div className="card-details-container">
                <p className="member-name poppins-medium">{info.student.name}</p>
                <p className="member-role poppins-regular">{info.member_role}</p>
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
