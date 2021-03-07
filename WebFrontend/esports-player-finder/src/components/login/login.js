import React, { useContext, useState } from "react";
import './login.css';
import logo from '../images/logo.png';

import { AppContext } from "../../contexts/AppContext";


// export default class Login extends React.Component{

    const Login = () => {

    const appContext = useContext(AppContext);
    let {
        userEmail,
        userPassword,
        handleUserEmail,
        handleUserPassword,
        login,
        checkDetails,
        errorMessage,
    } = appContext;

    const [hidePassword, setHidePassword] = useState(true);
    const showHiddenPassword = hidePassword ? "" : "hidden";
    const showRevealedPassword = hidePassword ? "hidden" : "";
    function togglePassword() {
    setHidePassword(!hidePassword);
    }

    function loggedIn(){
        const loginButtons = document.querySelectorAll('.notLoggedIn');
        for(const button of loginButtons){
            button.style.display = 'none';
        }
        const profile = document.querySelector('.loggedIn')
        profile.style.display = 'block'
    };

    // render(){
        return(
            <div className="page">
                <div id="loginArea">
                    <div id="headingArea">
                        <img src={logo} alt="Logo"/>
                        <span>Log In</span>
                    </div>
                    <div id="inputArea">
                        {/* EMAIL */}
                        <label htmlFor="email" 
                            className="emailContent">
                                Email
                            <p className="required">
                                    *
                            </p>
                        </label>
                        <input 
                            type="text" 
                            name="email" 
                            id="emailInput" 
                            value={userEmail} 
                            onChange={handleUserEmail}
                        />
                        {/* PASSWORD */}
                        <label htmlFor="password" 
                        className="passwordContent">
                            Password
                            <p className="required">
                                *
                            </p>
                        </label>
                        <input 
                            type="password" 
                            name="password" 
                            id="passwordInput"
                            value={userPassword}
                            onChange={handleUserPassword}
                            />
                        <a href="." className="forgotPassword">Forgot password?</a>
                        
                        <button onClick={() => login()}>Log In</button>
                        <span>New to ESPFinder?<a href="/register" className="joinNow"> Join now</a></span>
                    </div>
                </div>
            </div>
        )
    // }
}

export default Login;
