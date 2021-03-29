import { React , useState} from 'react';
import "./css/teamDetailPopup.css";

/**
 * @component
 * @description A Popup for displaying a team's details
 * @property {object} teamDetail - An object of a team's detail
 * @property {function} filler
 * @returns A popup with all the details about a team
 */

function TeamDetailPopup(props){
    
    const teamDetail = props.teamDetail
    
    return(
        <>
        <div id="teamDetailPopup">
            <div id="teamDetailName">
                {teamDetail["team_name"]}
            </div>
            <div id="teamDetailGame">
                <div className="teamDetailHeader">Game</div>
                <div className="teamDetailContent">{teamDetail["game_name"]}</div>
            </div>
            <div id="teamDetailDesc">
                <div className="teamDetailHeader">Description</div>
                <div className="teamDetailContent">{teamDetail["team_desc"]}</div>
            </div>
            <div id="teamDetailDiscordID">
                <div className="teamDetailHeader">Discord channel ID</div>
                <div className="teamDetailContent">Disc ID here</div>
            </div>
            <div id="teamDetailJoin">
                <button id="teamDetailJoinBtn">Join</button>
            </div>
        </div>
        {console.log(props.teamDetail)}
        </>
    )
}



export default TeamDetailPopup;