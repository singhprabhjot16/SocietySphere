import "../styles/AchievementModal.css";
import add from "../assets/add.svg";

function AchievementModal({ achievement, onClose }) {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={achievement.image_url} alt="" className="modal-image" />
                <div className="modal-details">
                    <div className="modal-title-container">
                        <p className="modal-title poppins-bold">{achievement.title}</p>
                        <p className="modal-date poppins-regular">{achievement.date}</p>
                    </div>
                    <p className="modal-caption poppins-regular">{achievement.caption}</p>
                    <p className="modal-description poppins-regular">{achievement.description}</p>
                </div>
            </div>
        </div>
    );
}

export default AchievementModal;
