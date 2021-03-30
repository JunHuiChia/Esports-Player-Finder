import { React , useContext} from 'react';
import { AppContext } from "../../contexts/AppContext";
import TeamBox from "./teamBox";

/**
 * @component
 * @property {Object} teams - Object containing an array of teams
 * @returns A whole array of TeamBox component with individual team's name and game on them
 */

function availableTeam(teams) {

    // const teamData = teams.teams.map((team) =>  <TeamBox key={team.team_id} teams={team}/>)
    let teamData = null;
    return(
        <>
        {teamData}
        </>
    )
}


export default availableTeam;