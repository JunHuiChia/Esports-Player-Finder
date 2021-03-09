import React, { useContext, useState } from "react";
import './login.css';
import logo from '../images/logo.png';

import { AppContext } from "../../contexts/AppContext";

import { useAlert } from 'react-alert'

import {Link, useHistory} from "react-router-dom";

// export default class Login extends React.Component{

    const Login = () => {
    const alert = useAlert();
    const appContext = useContext(AppContext);
    const history = useHistory();
    let {
        userName,
        userEmail,
        userPassword,
        handleUserEmail,
        handleUserPassword,
        login,
        checkDetails,
        errorMessage,
        loginStatus,
    } = appContext;

    const [hidePassword, setHidePassword] = useState(true);
    const showHiddenPassword = hidePassword ? "" : "hidden";
    const showRevealedPassword = hidePassword ? "hidden" : "";
    function togglePassword() {
    setHidePassword(!hidePassword);
    }


    function loginMsg(){
        login(function (statusMsg){
            alert.show(<div className="text-sm">{statusMsg}</div>)
            return history.push("/profile");
            })
    }

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
                            value={userPassword}
                            onChange={handleUserPassword}
                            onKeyDown={handleKeyDown}>
                            </input>
                            <div className="showPassword" onClick={() => togglePassword()}>Show</div>
                        </div>
                        <a href="." className="forgotPassword">Forgot password?</a>
                        <button onClick={() => loginMsg()}>Log In</button>
                        <span>New to ESPFinder?<Link to="/register" className="joinNow"> Join now</Link></span>
                    </div>
                </div>
            </div>
        )
    // }
}



export default Login;
