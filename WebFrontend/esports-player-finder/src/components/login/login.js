import React from 'react';
import './login.css';
import logo from '../images/logo.png';


export default class Login extends React.Component{

    render(){
        return(
            <div className="page">
                <div id="loginArea">
                    <div id="headingArea">
                        <img src={logo} alt="Logo"/>
                        <span>Log In</span>
                    </div>
                    <div id="inputArea">
                        <label htmlFor="email" className="emailContent">Email<p>*</p></label>
                        <input type="text" name="email" id="emailInput"></input>
                        <label htmlFor="password" className="passwordContent">Password<p>*</p></label>
                        <input type="password" name="password" id="passwordInput"></input>
                        <a href="." className="forgotPassword">Forgot password?</a>
                        <button>Log In</button>
                        <span>New to ESPFinder? <a href="/register" className="joinNow">Join now</a></span>
                    </div>
                </div>
            </div>
        )
    }
}