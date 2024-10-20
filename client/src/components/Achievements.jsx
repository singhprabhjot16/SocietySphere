import { useState } from "react";
import "../styles/Achievements.css";
import dummyData from "../../dummyData.json";
import AchievementCard from "./AchievementCard";
import AppUtils from "../utilities/AppUtils";
import NothingHere from "./NothingHere";

function Achievements() {
    const [achievements, setAchievements] = useState(dummyData.achievements);

    return (
        <div className="achievements-container">
            <div className="filler"></div>
            <div className="achievement-container">
                {!AppUtils.checkEmpty(achievements) ?
                achievements.map((achievement, idx) => 
                    <AchievementCard achievement={achievement} key={idx}/>
                ) : <NothingHere />}
            </div>
        </div>
    );
}

export default Achievements;