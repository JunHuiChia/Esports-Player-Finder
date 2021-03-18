import React from 'react';
import GameRole from './gameRole';

export default function newGameRole({games}){

    let gameRole = [];


    for (let [key,value] of Object.entries(games)){
        gameRole.push(value)

        console.log(gameRole);
        // return <GameRole game={value.game} role={value.role}/>
    }

    return (
        <div className="userGameRoles">
            { gameRole.map(game => {
                    return <GameRole game={game.game} role={game.role}/>
                })
            }
        </div>
    )
}