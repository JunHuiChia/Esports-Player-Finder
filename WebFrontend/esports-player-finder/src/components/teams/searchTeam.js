
import {React, useContext, useState} from 'react';
import GameSelection from '../profile/gameRole/gameSelection';
import RoleSelection from '../profile/gameRole/roleSelection';
import { AppContext } from "../../contexts/AppContext";

/**
 *  Component for searching for teams with these filters
 *  @component
 * 
 * @prop {string} games - List of game names
 * @prop {string} roles - List of game roles
 * @returns 
 * HTML for searching by games and roles
 */

function SearchGame(games){

    const appContext = useContext(AppContext);
    const {
        addGameRole,
        getTeamByGame,
    } = appContext;

    const [selected, setSelected] = useState(""); 

    const changeSelectOptionHandler = (event) => { 
        setSelected(event.target.value); 
    }; 
    let gameList = games.games;
    let roles = null;
    let options = null;
    let game = gameList.map((game) => <GameSelection game={game.name} gameID={game.id} key={game.id}/>)

    if(selected == gameList[0].id){
        roles = gameList[0]["game_roles"]
    }else if(selected == gameList[1].id){
        roles = gameList[1]["game_roles"]
    }

    if(roles){
        options = roles.map((role) => <RoleSelection role={role} key={role.id}/>)
    }


    function handleSearchGameRole(){
        let gameID = document.querySelector("#searchGame").value 
        let roleID = document.querySelector("#searchRole").value 
        console.log("GameID: ", gameID , " RoleID: ", roleID);
        getTeamByGame(gameID)
    }

    return (
        <>
        <div className="searchByGame">
            <label htmlFor="searchGame">Game: </label>
            <select name="searchGame" id="searchGame" onChange={changeSelectOptionHandler} defaultValue="null">
                <option value="null" disabled>Select a game</option>
                {game}
            </select>
        </div>
        <div id="searchByRole">
            <label htmlFor="searchRole">Role: </label>
            <select name="searchRole" id="searchRole">
                {options}
            </select>
        </div>
        <button id="searchTeamBtn" onClick={handleSearchGameRole}>Search</button>
        </>
    )
}

export default SearchGame;
