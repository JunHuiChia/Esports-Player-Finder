
import React from 'react';
import GameSelection from './gameSelection';

export default function AddGameRole({games, roles}){




    return (
        <div className="addGameRoleSection">
            <label htmlFor="selectGame">Choose a game: </label>
            <select name="selectGame" id="selectGame">
                {games.map(game => {
                    return <GameSelection game={game}/>
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

