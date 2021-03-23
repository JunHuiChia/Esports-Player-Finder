import { React , useState} from 'react';
import './teams.css';

import Popup from "../popup/popup.js";
import CreateTeamPopup from "./createTeamPopup";


function Teams() {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }


        return(
            <div id="teamPage">

                <div id="teamList">
                    <span className="teamListTitle">Available Teams</span>

                </div>
                <div id="createTeam"> 
                    <button className="createTeamBtn" onClick={togglePopup}>Create team</button>
                </div>
                {isOpen && 
                    <Popup content={<CreateTeamPopup/>}
                    handleClose = {togglePopup}/>
                }
            </div>
        )
}

export default Teams;