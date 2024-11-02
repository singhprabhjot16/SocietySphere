import { useState } from "react";
import AppUtils from "../../utilities/AppUtils";

function LoginForm({ setIsLogin, setShowLoginForm }) {
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
                setShowLoginForm(false);
                console.log("Logged in successfully, token saved.");
            }
        } catch (error) {
            console.error("Error during login:", error);
            setErrorMessage("Login failed. Please check your credentials.");
        }
    }

    return (
        <div className="login-form-container">
            <form onSubmit={handleLogin} className="login-form">
                <h2>Login as Admin</h2>
                <div className="form-group">
                    <label htmlFor="email">Society Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;