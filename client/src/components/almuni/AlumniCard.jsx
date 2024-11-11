import { useState } from "react";
import linkedinIcon from "../../assets/linkedin.svg";
import "../../styles/coordinators/CoordinatorCard.css";

function AlumniCard({ info, isEditingMode, onEdit }) {
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

            {/* <iframe src={`https://drive.google.com/file/d/${info.imageUrl}/preview`} width="240" height="180" allow="autoplay"></iframe> */}
            <img src={`https://drive.google.com/thumbnail?id=${info.imageUrl}`} alt="member" className="member-image" />
            <div className="card-details-container">
                <p className="member-name poppins-medium">{info.student.name}</p>
                <p className="member-role poppins-regular">{info.memberRole}</p>
                <div className="socials">
                    <a href={info.linkedin} target="_blank" rel="noreferrer">
                        <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default AlumniCard;
