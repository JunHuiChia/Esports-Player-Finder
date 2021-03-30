import React, { useContext, useState } from "react";
import './login.css';
import logo from '../images/logo.png';

import { AppContext } from "../../contexts/AppContext";

import { useAlert } from 'react-alert'

import {Link, useHistory} from "react-router-dom";

// export default class Login extends React.Component{
/**
 *  Component for the login page 
 * @component
 * 
 * @returns 
 * HTML for login page and the functionality
 */

    const Login = (props) => {
        
    const alert = useAlert();
    const appContext = useContext(AppContext);
    const history = useHistory();
    let {
        userEmail,
        userPassword,
        handleUserEmail,
        handleUserPassword,
        login,
    } = appContext;

    const [hidePassword, setHidePassword] = useState(true);
    
    /**
     * @function
     * @description Toggling whether the password is visible or not
     */
    function togglePassword() {
    setHidePassword(!hidePassword);
    }

    /**
     * @function
     * @description Processes the login and returns a message depending on the status of the login
     * @returns 
     * if successful -> redirects user to their profile page
     * else -> show error message and no redirects
     */
    function loginMsg(){
        login(function (statusMsg){
            alert.show(<div className="text-sm">{statusMsg}</div>)
            return history.push("/profile");
            })
    }

    /**
     * @function
     * @description Calls the loginMsg() function which processes the login. When the user presses the "Enter" key while on the password input
     * @param {event} event - Takes the event the user is inputting
     */
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            loginMsg();
        }
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
                        <div className="loginPasswordSpan">
                            <input 
                            type={(hidePassword) ? "password":"text"} 
                            name="password" 
                            id="passwordInput"
                            aria-label="passwordBox"
                            alt="passwordBox"
                            value={userPassword}
                            onChange={handleUserPassword}
                            onKeyDown={handleKeyDown}>
                            </input>
                            <div className="showPassword" onClick={togglePassword}>Show</div>
                        </div>
                        {/* <a href="." className="forgotPassword">Forgot password?</a> */}
                        <button onClick={loginMsg}>Log In</button>
                        <span>New to ESPFinder?<Link to="/register" className="joinNow"> Join now</Link></span>
                    </div>
                </div>
            </div>
        )
    // }
}



export default Login;
