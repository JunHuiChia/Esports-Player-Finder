import { React , useState} from 'react';

/**
 * @component
 * @description A Popup for displaying a team's details
 * @property {object} teamDetail - An object of a team's detail
 * @returns A popup with all the details about a team
 */

function TeamDetailPopup(props){
    
    const teamDetail = props.teamDetail
    
    return(
        <>
        <div id="teamDetailPopup">
            <div id="teamDetailName">
                {teamDetail.name}
            </div>
            <div id="teamDetailGame">
                <div className="teamDetailHeader">Game</div>
                <div className="teamDetailContent">{teamDetail.game.name}</div>
            </div>
            <div id="teamDetailDesc">
                <div className="teamDetailHeader">Description</div>
                <div className="teamDetailContent">{teamDetail.description}</div>
            </div>
            <div id="teamDetailDiscordID">
                <div className="teamDetailHeader">Discord channel ID</div>
                <div className="teamDetailContent discord"><a href={`https://discord.gg/${teamDetail.discord_channel_id}`} target="_blank" rel="noreferrer">Join Discord</a></div>
            </div>
            <div id="teamDetailJoin">
                <button id="teamDetailJoinBtn">Leave</button>
            </div>
        </div>
        </>
    )
}



export default TeamDetailPopup;