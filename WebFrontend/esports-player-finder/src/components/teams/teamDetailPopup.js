import { React, useContext } from 'react';
import "./css/teamDetailPopup.css";
import { AppContext } from "../../contexts/AppContext";
import { useAlert } from 'react-alert'

/**
 * @component
 * @description A Popup for displaying a team's details
 * @property {object} teamDetail - An object of a team's detail
 * @returns A popup with all the details about a team
 */

function TeamDetailPopup(props){
    const appContext = useContext(AppContext);
    const alert = useAlert();

    const {
        joinTeam,
    } = appContext;

    const teamDetail = props.teamDetail


    function handleJoinTeam(){
        const handleClose = props.handleClose
        joinTeam(teamDetail["team_id"], handleClose, function(statusMsg){
            alert.show(<div className="text-sm">{statusMsg}</div>)
        })
    }

    
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
                <div className="teamDetailContent"><a href={`https://discord.gg/${teamDetail["team_discord"]}`} target="_blank" rel="noreferrer">Join Discord</a></div>
            </div>
            <div id="teamDetailJoin">
                <button id="teamDetailJoinBtn" onClick={handleJoinTeam}>Join</button>
            </div>
        </div>
        {console.log(props.teamDetail)}
        </>
    )
}



export default TeamDetailPopup;