import linkedinIcon from "../assets/linkedin.svg";
import "../styles/CoordinatorCard.css";

function CoordinatorCard({info}) {
    console.log('info: ', info)
    return (
        <div className="card-container">
            <img src={info.imageUrl} alt="" className="member-image"/>
            <div className="card-details-container">
                <p className="member-name poppins-medium">{info.student.name}</p>
                <p className="member-role poppins-regular">{info.memberRole}</p>
                <div className="socials">
                    <a href=""><img src={linkedinIcon} alt="" className="social-icon"/></a>
                </div>
            </div>
        </div>
    );
}

export default CoordinatorCard;