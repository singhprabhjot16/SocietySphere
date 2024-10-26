import { useState } from 'react';
import "../styles/AchievementCard.css";
import AchievementModal from './AchievementModal';

function AchievementCard({ achievement }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClick = () => {
        setIsModalOpen(true);
    }

    const handleClose = () => {
        setIsModalOpen(false);
    }

    return (
        <>
            <div className="achievement-card-container" onClick={handleClick}>
                <img src={achievement.imageUrl} alt="" className="achievement-image" />
                <div className="details-container">
                    <div className="title-container">
                        <p className="achievement-title poppins-medium">{achievement.title}</p>
                        <p className="achievement-date poppins-thin">{achievement.date}</p>
                    </div>
                    <p className="caption poppins-regular">{achievement.caption}</p>
                </div>
            </div>
            {isModalOpen && (
                <AchievementModal
                    achievement={achievement}
                    onClose={handleClose}
                />
            )}
        </>
    );
}

export default AchievementCard;
