import "../styles/AchievementCard.css";

function AchievementCard({achievement}) {
    return (
        <div className="achievement-card-container">
            <img src={achievement.image_url} alt="" className="achievement-image"/>
            <div className="details-container">
                <div className="title-container">
                    <p className="achievement-title poppins-medium">{achievement.title}</p>
                    <p className="achievement-date poppins-thin">{achievement.date}</p>
                </div>
                <p className="caption poppins-regular">{achievement.caption}</p>
            </div>
        </div>
    )
}

export default AchievementCard;