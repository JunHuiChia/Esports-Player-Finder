import React, { useContext, useState } from "react";
import './register.css';
import logo from '../images/logo.png';

import { AppContext } from "../../contexts/AppContext";
import { useAlert } from 'react-alert'

import {Link} from "react-router-dom";

// export default class Register extends React.Component{
    const Register = () => {
    const alert = useAlert();

    const appContext = useContext(AppContext);
    const {
        userNameInput,
        userEmail,
        userPassword,
        handleUserNameInput,
        handleUserEmail,
        handleUserPassword,
        signup,
        errorMessage,
        checkDetails,
    } = appContext;
    

    const [hidePassword, setHidePassword] = useState(true);
    const showHiddenPassword = hidePassword ? "" : "hidden";
    const showRevealedPassword = hidePassword ? "hidden" : "";
    function togglePassword() {
    setHidePassword(!hidePassword);
    }

    function signupMsg(){
        signup();
        if(errorMessage !== ""){
            delay()
        }
        console.log(errorMessage);
    }
    
    function delay(){
        alert.show(<div className="text-sm">{errorMessage}</div>)
    }
    // render(){
        return(
                <div className="page">
                    <div id="registerArea">
                        <div id="headingArea">
                            <img src={logo} alt="Logo"/>
                            <span>Register</span>
                        </div>
                        <div id="inputArea">
                            <label 
                                htmlFor="username" 
                                className="registerUsernameText">
                                    Username
                                    <p className="required">
                                        *
                                    </p>
                            </label>
                            <input 
                            type="text" 
                            name="username" 
                            id="registerUsernameInput"
                            value={userNameInput}
                            onChange={handleUserNameInput}
                            />
                            <label 
                                htmlFor="email" 
                                className="registerEmailText">
                                    Email
                                    <p className="required">
                                        *
                                    </p>
                            </label>
                            <input 
                            type="text" 
                            name="email" 
                            id="registerEmailInput"
                            value={userEmail}
                            onChange={handleUserEmail}
                            />
                            <label 
                                htmlFor="password" 
                                className="registerPasswordText">
                                    Password
                                    <p className="required">
                                        *
                                    </p>
                            </label>
                            <div className="registerPasswordSpan">
                                <input 
                                type={(hidePassword) ? "password":"text"} 
                                name="password" 
                                id="registerPasswordInput"
                                value={userPassword}
                                onChange={handleUserPassword}>
                                </input>
                                <div id="showPassword" onClick={() => togglePassword()} href=".">Show</div>
                            </div>
                            <p className="agreement">By clicking Agree & Join, you agree to our User Agreement, Privacy Policy, and Cookie Policy.</p>
                            <button onClick={() => signupMsg()}>Agree & Join</button>
                            <span>Already on ESPFinder? <Link to="/login" className="sign-in">Log in</Link></span>
                        </div>
                    </div>
                    
                </div>
        )
    // }
}

export default Register;
