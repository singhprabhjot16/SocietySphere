import { useState } from 'react';
import "../../styles/achievements/AchievementCard.css";
import AchievementModal from './AchievementModal';
import AppUtils from '../../utilities/AppUtils';

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
                <img src={`https://drive.google.com/thumbnail?id=${achievement.imageUrl}`} alt="" className="achievement-image" />
                <div className="details-container">
                    <div className="title-container">
                        <p className="achievement-title poppins-medium">{achievement.title}</p>
                        <p className="achievement-date poppins-thin">{AppUtils.formatDate(achievement.date)}</p>
                    </div>
                    <p className="caption poppins-regular">{achievement.description}</p>
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
