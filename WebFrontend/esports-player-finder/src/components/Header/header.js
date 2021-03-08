import './header.css';
import logo from '../images/logo.png';
import React, { useContext } from "react";

import {
  NOT_LOGGED_IN,
  LOG_IN_FORM,
  SIGN_UP_FORM,
  LOGGED_IN,
} from "../../constants/AuthStatus";

import { AppContext } from "../../contexts/AppContext";


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

// export default class header extends React.Component {
    const Header = () => {
        const appContext = useContext(AppContext);
        const { 
            userName, 
            logout, 
            checkDetails, 
            authStatus 
            } 
            = appContext;
        const showNotLoggedIn = authStatus === NOT_LOGGED_IN ? "" : "hidden";
        const showLoggedIn = authStatus === LOGGED_IN ? "" : "hidden";

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         active: true,
    //         class: " ",
    //     };
    //     this.toggleActiveClass = this.toggleActiveClass.bind(this);
    // }
    
    // toggleActiveClass(){
    //     const currentState = this.state.active;
    //     this.setState({active: !currentState});
    //     this.setState({class: this.state.active ? "active" : " "})
    // }
    
    // loggedIn(){
        //     const loginButtons = document.querySelectorAll('.notLoggedIn');
        //     for(const button of loginButtons){
            //         button.style.display = 'none';
            //     }
            //     const profile = document.querySelector('.loggedIn')
            //     profile.style.display = 'block'
            // };
            
            
            
    
        // render() {
        
        return (
            <Router>
        
            <header className="header">
                <img alt="logo" src={logo} id="logo"></img>
                <div className="navArea">
                    <Link to="/" className="navButton active" >Dashboard</Link>
                    <Link to="/games" className="navButton">Games</Link>
                    <Link to="/about" className="navButton">About</Link>
                    <Link to="/help" className= "navButton">Help</Link>
                </div>
                <div className="userArea">
                    
                    <Link to="/login" className={`loginButton topRight ${showNotLoggedIn}`}>Login</Link>
                    <Link to="/register" className={`registerButton topRight ${showNotLoggedIn}`}>Register</Link>
                    <a href="/" className={`profileButton topRight ${showLoggedIn}`}>{userName}</a>
                    <a href="/" className={`logoutButton topRight ${showLoggedIn}`}>Log out</a>
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
// }
}


export default Header;