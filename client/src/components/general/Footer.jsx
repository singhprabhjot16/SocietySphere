import "../../styles/general/Footer.css";
import "../../styles/index.css";
import QueryForm from "../reusable/QueryForm";

function Footer() {
    return (
        <div className="footer-container">
            <div className="back-to-top poppins-regular">Back To Top</div>
            <div className="footer-routes">
                <QueryForm />
            </div>
            <div className="footer-end div-padding">
                <p className="website-name righteous-regular">ClubConnect</p>
                <p className="poppins-regular copyright">Copyright © 2024. All Rights Reserved.</p>
            </div>
        </div>
    );
}

export default Footer;