import React, { useContext, useState } from "react";
import './login.css';
import logo from '../images/logo.png';

import { AppContext } from "../../contexts/AppContext";

import { useAlert } from 'react-alert'


// export default class Login extends React.Component{

    const Login = () => {
    const alert = useAlert();
    const appContext = useContext(AppContext);
    let {
        userName,
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

    function loginMsg(){
        login();
        console.log(errorMessage);
        alert.show(<div className="text-sm">{errorMessage}</div>)
    }

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
                        
                        <button onClick={() => loginMsg()}>Log In</button>
                        <span>New to ESPFinder?<a href="/register" className="joinNow"> Join now</a></span>
                    </div>
                </div>
            </div>
        )
    // }
}

export default Login;
