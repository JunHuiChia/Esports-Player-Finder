import React from 'react';
import './register.css';
import logo from '../images/logo.png';



export default class Register extends React.Component{

    render(){
        return(
            <div className="page">
                <div id="registerArea">
                    <div id="headingArea">
                        <img src={logo} alt="Logo"/>
                        <span>Register</span>
                    </div>
                    <div id="inputArea">
                        <label htmlFor="username" className="registerUsernameText">Username<p className="required">*</p></label>
                        <input type="text" name="username" id="registerUsernameInput"></input>
                        <label htmlFor="email" className="registerEmailText">Email<p className="required">*</p></label>
                        <input type="text" name="email" id="registerEmailInput"></input>
                        <label htmlFor="password" className="registerPasswordText">Password<p className="required">*</p></label>
                        <input type="password" name="password" id="registerPasswordInput"></input>
                        <p className="agreement">By clicking Agree & Join, you agree to our User Agreement, Privacy Policy, and Cookie Policy.</p>
                        <button>Agree & Join</button>
                        <span>Already on ESPFinder? <a href="/login" className="sign-in">Log in</a></span>
                    </div>
                </div>
            </div>
        )
    }
}