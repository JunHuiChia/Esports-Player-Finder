import React from 'react';
import GameRole from './gameRole';

/**
 *  Component for adding new game roles for users
 *  @component
 * 
 * @prop {object} gameRole - contains game name and roles for that game
 * @returns 
 * Maps the each object to its own component for displaying games and its role.
 */

function newGameRole(gameRole){


    return (
        <div className="userGameRoles">
            { gameRole.games.map(game => {
                    return <GameRole key={game.id} game={game.game} role={game.name}/>
                })
            }
        </div>
    )
}

export default newGameRole;
