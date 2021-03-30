import {React} from 'react';
import './profileTeamContent.css';
import ProfileTeamBox from "./profileTeamBox"

/**
 * @component
 * @property {Array} team - Takes in a array of objects of teams the user is in
 */
function TeamContent(team){

    console.log(team);

    return (
        <div className="userTeams">
        {team.teamDetail.map((team) => {return <ProfileTeamBox key={team.id} teams={team}/>})}
        </div>
    )
};

export default TeamContent;