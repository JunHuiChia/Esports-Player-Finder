
import {React, useContext, useState} from 'react';
import GameSelection from './gameSelection';
import RoleSelection from './roleSelection';
import { AppContext } from "../../../contexts/AppContext";

/**
 *  Component for adding new game roles
 *  @component
 * 
 * @prop {string} games - List of game names
 * @prop {string} roles - List of game roles
 * @returns 
 * HTML of select for choosing games and roles to add
 */

function AddGameRole(games){

    const appContext = useContext(AppContext);
    const {
        addGameRole
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


    function handleAddGameRole(){
        let gameID = document.querySelector("#selectGame").value 
        let roleID = document.querySelector("#selectRole").value 
        console.log("GameID: ", gameID , " RoleID: ", roleID);
        addGameRole(roleID)
    }

    return (
        <div className="addGameRoleSection">
            <label htmlFor="selectGame">Choose a game: </label>
            <select name="selectGame" id="selectGame" onChange={changeSelectOptionHandler} defaultValue="null">
                <option value="null" disabled>Select a game</option>
                {game}
            </select>
            <label htmlFor="selectRole">Choose your role: </label>
            <select name="selectRole" id="selectRole">
                {options}
            </select>

            <button className="addGameRole" onClick={handleAddGameRole}>Add</button>

        </div>
    )
}

export default AddGameRole;
