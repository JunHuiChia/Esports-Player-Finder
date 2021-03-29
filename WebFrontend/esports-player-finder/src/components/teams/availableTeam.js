import { React , useContext} from 'react';
import { AppContext } from "../../contexts/AppContext";
import TeamBox from "./teamBox";

function availableTeam(teams) {

    const teamData = teams.teams.map((team) =>  <TeamBox key={team.team_id} teams={team}/>)

    return(
        <>
        {teamData}
        </>
    )
}


export default availableTeam;