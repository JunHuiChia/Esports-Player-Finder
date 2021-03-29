import { React , useState, useContext} from 'react';
import './css/teams.css';

import { AppContext } from "../../contexts/AppContext";
import Popup from "../popup/popup.js";
import CreateTeamPopup from "./createTeamPopup";
import AvailableTeam from "./availableTeam";
import SearchTeam from "./searchTeam"

/**
 *  Component for Teams page
 * @component
 * @returns 
 * Teams Page for displaying available teams and for creating a team
 */

function Teams() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearched, setIsSearched] = useState(false)

    const appContext = useContext(AppContext);
    const {
        gameList,
        getTeamByID,
        teamData,
    } = appContext;

    /**
     * @function
     * @description For closing and opening the popups on this page
     */
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    /**
     * @function
     * @description Changes isSearched variable to True depending on whether the user has searched for a team or not
     */
    const searchedTrue = () => {
        setIsSearched(true);
    }



        return(
            <div id="teamPage">
                <div id="teamHeader">
                    <div id="teamList">
                        <span className="teamListTitle">Available Teams</span>
                        {/* <AvailableTeam teamData={teamData}/> */}
                    </div>
                    <div id="createTeam"> 
                        <button className="createTeamBtn" onClick={togglePopup}>Create team</button>
                    </div>
                </div>
                <div id="searchTeam">
                        <SearchTeam games={gameList} handleSearch={searchedTrue}/>
                </div>
                <div id="availableTeams">
                    
                    {isSearched &&
                        <AvailableTeam teams={teamData}/>}
                        {console.log(teamData)}
                </div>
                {isOpen && 
                    <Popup content={<CreateTeamPopup handleClose = {togglePopup} games={gameList}/>}
                    handleClose = {togglePopup}/>
                }
            </div>
        )
}

export default Teams;