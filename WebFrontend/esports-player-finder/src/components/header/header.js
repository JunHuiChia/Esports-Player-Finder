import './header.css';
import logo from '../images/logo.png';
import React, { useContext } from "react";

import {
  NOT_LOGGED_IN,
  LOGGED_IN,
} from "../../constants/AuthStatus";

import { AppContext } from "../../contexts/AppContext";


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

import LoginPage from '../login/login.js';
import RegisterPage from '../register/register.js';
import Dashboard from '../dashboard/dashboard.js';
// import Games from '../games/games.js';
import Matchfinding from '../matchfinding/matchfinding.js';
import Teams from '../teams/teams.js';
import Profile from '../profile/profile.js';
import ProfileEdit from '../profile/profileEdit.js';

import PrivateRoute from '../routes/PrivateRoute.js';
// export default class header extends React.Component {


/**
 * Navigation header 
 * @component
 * 
 * @returns 
 * A navigation bar at the top of the screen
 */


    const Header = () => {
        const appContext = useContext(AppContext);
        const { 
            userName, 
            logout, 
            authStatus,
            getGames,
            } 
            = appContext;
        const showNotLoggedIn = authStatus === NOT_LOGGED_IN ? "" : "hidden";
        const showLoggedIn = authStatus === LOGGED_IN ? "" : "hidden";

        
        return (
            <Router>
        
            <header className="header">
                <Link to="/" className="logo"><img alt="logo" src={logo} id="logo"></img></Link>
                <div className="navArea">
                    <Link to="/" className="navButton active hidden" >Dashboard</Link>
                    <Link to="/matchfinding" className="navButton">Matchfinding</Link>
                    <Link to="/teams" className="navButton">Teams</Link>
                    {/* <Link to="/help" className= "navButton">Help</Link> */}
                </div>
                <div className="userArea">
                    <Link to="/login" className={`loginButton topRight ${showNotLoggedIn}`}>Login</Link>
                    <Link to="/register" className={`registerButton topRight ${showNotLoggedIn}`}>Register</Link>
                    <Link to="/profile" className={`font-semibold profileButton topRight ${showLoggedIn}`}>{userName}</Link>
                    <Link to="/" onClick={logout} className={`logoutButton topRight ${showLoggedIn}`}>Log out</Link>
                </div>
            </header>

            <Switch>
                <Route path="/matchfinding"><Matchfinding/></Route>
                <Route path="/teams"><Teams/></Route>

                <Route path="/login"><LoginPage/></Route>
                <Route path="/register"><RegisterPage/></Route>
                
                <PrivateRoute component={Profile} path="/profile" exact/>
                <PrivateRoute component={ProfileEdit} path="/profile/edit" exact/>

                <Route path="/"><Dashboard/></Route>
            </Switch>

        </Router>
    )
// }
}

// {loggedIn ? <Redirect to="/" /> : <LoginPage />}
export default Header;