
import {React, useContext, useEffect} from 'react';
import GameSelection from '../profile/gameRole/gameSelection';
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

function SearchGame(props){

    const appContext = useContext(AppContext);
    const {
        getTeamByGame,
        getGames,
    } = appContext;


    let gameList = props.games;
    let game = gameList.map((game) => <GameSelection game={game.name} gameID={game.id} key={game.id}/>)

    function handleSearchGameRole(){
        let gameID = document.querySelector("#searchGame").value 
        const handleSearch = props.handleSearch
        getTeamByGame(gameID, handleSearch)
    }
    useEffect(() =>{
        getGames();
        return () => {}
    }, [])

    return (
        <>
        <div className="searchByGame">
            <label htmlFor="searchGame">Game: </label>
            <select name="searchGame" id="searchGame" defaultValue="null">
                <option value="null" disabled>Select a game</option>
                {game}
            </select>
        </div>
        <button id="searchTeamBtn" onClick={handleSearchGameRole}>Search</button>
        </>
    )
}

export default SearchGame;
