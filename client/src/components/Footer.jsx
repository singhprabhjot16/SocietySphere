import "../styles/Footer.css";

function Footer() {
    return (
        <div className="footer-container">
            <div className="back-to-top poppins-regular">Back To Top</div>
            <div className="query-form-container">
                <form action="POST" className="query-form">
                    
                </form>
            </div>
            <div className="footer-end div-padding">
                <p className="website-name dm-serif-display-regular">SocietySphere</p>
                <p className="poppins-regular copyright">Copyright © 2024. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer;