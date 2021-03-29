import { React , useContext} from 'react';
import { AppContext } from "../../contexts/AppContext";
import GameSelection from '../profile/gameRole/gameSelection';

/**
 *  Component for creating a team PopUp 
 * @component
 * @property {function} handleClose - Function responsible for closing the popup upon click.
 * @property {array} games - An array of games to display for team choosing what game they play.
 * @returns 
 * HTML pop up for creating a team
 */
function CreateTeamPopup(props) {

    const appContext = useContext(AppContext);
    const {
        createTeam,
    } = appContext;

    console.log(props);
    let game = props.games.map((game) => <GameSelection game={game.name} gameID={game.id} key={game.id}/>)

    /**
     * @function
     * @description Handles the team data and calls createTeam function to add it to database via POST API
     */
    function createTeamHandler(){
        let name = document.querySelector("#teamName").value
        let game = document.querySelector("#teamGame").value
        let desc = document.querySelector("#teamDesc").value
        let discID = document.querySelector("#teamDiscord").value
        
        createTeam(name,game,desc,discID,props.handleClose);

    }


    return (
        <>
            <div className="createTeam">
                <div className="createTeamDetails teamDetailsLabels">
                    <label htmlFor="teamName">Team Name:</label>
                    <label htmlFor="teamGame">Game: </label>
                    <label htmlFor="teamDesc">Description: </label>
                    <label htmlFor="teamDiscord">Discord channel ID: </label>
                </div>

                <div className="createTeamDetails teamDetailsInput" >
                    <input name="teamName" id="teamName"></input>
                    <select name="teamGame" id="teamGame" defaultValue="null">
                        <option value="null" disabled>Select a game</option>
                        {game}
                    </select>
                    <input name="teamDesc" id="teamDesc"></input>
                    <input name="teamDiscord" id="teamDiscord"></input>
                </div>
            </div>
            <div className="createBtnDiv">
                <button onClick={createTeamHandler}>Create</button>
            </div>
        </>
    )
}



export default CreateTeamPopup;