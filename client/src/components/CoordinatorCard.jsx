import linkedinIcon from "../assets/linkedin.svg";
import "../styles/CoordinatorCard.css";

function CoordinatorCard({info}) {

    // const info = {
    //     member_name: "Charlie Black",
    //     member_role: "President",
    //     image_url: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    // }

    return (
        <div className="card-container">
            <img src={info.image_url} alt="" className="member-image"/>
            <p className="member-name poppins-medium">{info.member_name}</p>
            <p className="member-role poppins-regular">{info.member_role}</p>
            <div className="socials">
                <a href=""><img src={linkedinIcon} alt="" className="social-icon"/></a>
            </div>
        </div>
    );
}

export default CoordinatorCard;