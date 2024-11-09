import { useState } from "react";
import AppUtils from "../../utilities/AppUtils";
import "../../styles/general/LoginForm.css"
import login from "../../assets/login.svg";

function LoginForm({ setIsLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    async function handleLogin(e) {
        e.preventDefault();
        try {
            const data = await AppUtils.societyHeadLogin(email, password);
            if (data.token) {
                sessionStorage.setItem("jwtToken", data.token);
                setIsLogin(true);
                console.log("Logged in successfully, token saved.");
            }
        } catch (error) {
            console.error("Error during login:", error);
            setErrorMessage("Login failed. Please check your credentials.");
        }
    }

    return (
        <div className="login-form-container div-padding">
            <div className="login-form-image">
                <img src={login} alt="" />
            </div>
            <form onSubmit={handleLogin} className="login-form">
                <h2 className="poppins-bold form-heading">Login as Admin</h2>
                <div className="form-group">
                    {/* <label htmlFor="email">Society Email</label> */}
                    <input 
                        type="email" 
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Society Email"
                        required 
                    />
                </div>
                <div className="form-group">
                    {/* <label htmlFor="password">Password</label> */}
                    <input 
                        type="password" 
                        id="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Password"
                        required 
                    />
                </div>
                {errorMessage && <p className="error-message poppins-regular">{errorMessage}</p>}
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;