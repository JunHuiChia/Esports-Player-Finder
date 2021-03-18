import React from 'react';

export default function GameRole({game, role}){

    return (
        <div className="userDetails gameRoles">
            <div className="profileGame ">Game: <p>{game}</p></div>
            <div className="profileGame Role ">Role: <p>{role}</p></div>
        </div>
    )
}