import { React , useState, useContext} from 'react';
import './teams.css';

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

    const appContext = useContext(AppContext);
    const {
        gameList,
        getTeamByID,
        teamData,
    } = appContext;

    const togglePopup = () => {
        setIsOpen(!isOpen);
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
                        <SearchTeam games={gameList}/>
                </div>
                {isOpen && 
                    <Popup content={<CreateTeamPopup handleClose = {togglePopup} games={gameList}/>}
                    handleClose = {togglePopup}/>
                }
            </div>
        )
}

export default Teams;