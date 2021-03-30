import React from 'react';
import './dashboard.css';
import csgoLogo from '../images/csgoLogo.png'
import LeagueLogo from '../images/LeagueLogo.png'


/**
 * @component
 * @description Component for the dashboard page
 */
class Dashboard extends React.Component{

    render(){
        return(
            <>
            <div className="dashboard">
                <div className="dashboardTitle">Welcome to Esports Player Finder</div>
                <div className="dashboardIntro">
                    <span>At Esports Player Finder, we are dedicated to help you find players to play games with and have fun!</span>
                    <span>No matter what skill level you are, you'll be able to fit into any team!</span>
                    <span>Find players to compete in the top eSports games with right now!</span>
                </div>
                <div className="dashboardCurrentGames">
                    <div id="dashboardGamesTitle">Currently supported games: </div>
                    <div id="dashboardGamesContent">
                        <img src={csgoLogo} alt="logo for csgo"/>
                        <img src={LeagueLogo} alt="logo for league of legends"/>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Dashboard;