import './header.css';
import logo from '../images/logo.png';
import React from 'react';

export default function header() {

    function loggedIn(){
        const loginButtons = document.querySelectorAll('.notLoggedIn');
        for(const button of loginButtons){
            button.style.display = 'none';
        }
        const profile = document.querySelector('.loggedIn')
        profile.style.display = 'block'
    }

    return (
        <header className="header">
            <img alt="logo" src={logo} id="logo"></img>
            <div className="navArea">
                <a href="." className="navButton active">Dashboard</a>
                <a href="." className="navButton">Games</a>
                <a href="." className="navButton">About</a>
                <a href="." className="navButton">Help</a>
            </div>
            <div className="userArea">
                <a href="." className="loginButton topRight notLoggedIn">Login</a>
                <a href="." className="registerButton topRight notLoggedIn">Register</a>
                <a href="." className="profileButton topRight loggedIn">Profile</a>
            </div>
        </header>
    )
}