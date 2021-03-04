import './header.css';
import logo from '../images/logo.png';
import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import LoginPage from '../login/login.js';
import RegisterPage from '../register/register.js';
import Dashboard from '../dashboard/dashboard.js';
import Games from '../games/games.js';
import About from '../about/about.js';
import Help from '../help/help.js';

export default class header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            active: true,
            class: " ",
        };
        this.toggleActiveClass = this.toggleActiveClass.bind(this);
    }

    toggleActiveClass(){
        const currentState = this.state.active;
        this.setState({active: !currentState});
        this.setState({class: this.state.active ? "active" : " "})
        console.log("status");
    }

    // loggedIn(){
    //     const loginButtons = document.querySelectorAll('.notLoggedIn');
    //     for(const button of loginButtons){
    //         button.style.display = 'none';
    //     }
    //     const profile = document.querySelector('.loggedIn')
    //     profile.style.display = 'block'
    // };

    render() {
        return (
            <Router>
        
            <header className="header">
                <img alt="logo" src={logo} id="logo"></img>
                <div className="navArea">
                    <Link to="/" className="navButton active" >Dashboard</Link>
                    <Link to="/games" className="navButton">Games</Link>
                    <Link to="/about" className="navButton">About</Link>
                    <Link to="/help" className={`${this.state.class} navButton`} onClick={this.toggleActiveClass}>Help</Link>
                </div>
                <div className="userArea">
                    
                    <Link to="/login" className="loginButton topRight notLoggedIn">Login</Link>
                    <Link to="/register" className="registerButton topRight notLoggedIn">Register</Link>
                    <a href="." className="profileButton topRight loggedIn">Profile</a>
                </div>
            </header>

            <Switch>
                <Route path="/games"><Games/></Route>
                <Route path="/about"><About/></Route>
                <Route path="/help"><Help/></Route>

                <Route path="/login"><LoginPage/></Route>
                <Route path="/register"><RegisterPage/></Route>
                <Route path="/profile"></Route>
                
                <Route path="/"><Dashboard/></Route>
            </Switch>

        </Router>
    )
}
}