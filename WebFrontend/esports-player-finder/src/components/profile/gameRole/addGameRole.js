
import React from 'react';
import GameSelection from './gameSelection';

/**
 *  Component for adding new game roles
 *  @component
 * 
 * @prop {string} games - List of game names
 * @prop {string} roles - List of game roles
 * @returns 
 * HTML of select for choosing games and roles to add
 */

function AddGameRole({games, roles}){

    return (
        <div className="addGameRoleSection">
            <label htmlFor="selectGame">Choose a game: </label>
            <select name="selectGame" id="selectGame">
                {games.map(game => {
                    return <GameSelection game={game.name}/>
                })}
            </select>
            <label htmlFor="selectRole">Choose your role: </label>
            <select name="selectRole" id="selectRole">
                <option value={roles}>{roles}</option>
            </select>
            <button className="addGameRole">Add</button>

        </div>
    )
}

export default AddGameRole;
