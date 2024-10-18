import { useState } from "react";
import "../styles/Achievements.css";
import dummyData from "../../dummyData.json";
import AchievementCard from "./AchievementCard";

function Achievements() {
    const [achievements, setAchievements] = useState(dummyData.achievements);

    return (
        <div className="achievements-container">
            <div className="filler"></div>
            <div className="achievement-container">
                <AchievementCard />
            </div>
        </div>
    );
}

export default Achievements;