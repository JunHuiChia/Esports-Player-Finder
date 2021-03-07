import React from 'react';
import './login.css';
import logo from '../images/logo.png';


export default class Login extends React.Component{

    loggedIn(){
        const loginButtons = document.querySelectorAll('.notLoggedIn');
        for(const button of loginButtons){
            button.style.display = 'none';
        }
        const profile = document.querySelector('.loggedIn')
        profile.style.display = 'block'
    };

    render(){
        return(
            <div className="page">
                <div id="loginArea">
                    <div id="headingArea">
                        <img src={logo} alt="Logo"/>
                        <span>Log In</span>
                    </div>
                    <div id="inputArea">
                        <label htmlFor="email" className="emailContent">Email<p className="required">*</p></label>
                        <input type="text" name="email" id="emailInput"></input>
                        <label htmlFor="password" className="passwordContent">Password<p className="required">*</p></label>
                        <input type="password" name="password" id="passwordInput"></input>
                        <a href="." className="forgotPassword">Forgot password?</a>
                        <button onClick={this.loggedIn}>Log In</button>
                        <span>New to ESPFinder? <a href="/register" className="joinNow">Join now</a></span>
                    </div>
                </div>
            </div>
        )
    }
}