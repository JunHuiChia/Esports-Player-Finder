import React from 'react';

export default function gameSelection(gameList){
        console.log(gameList);
        return <option value={gameList}>{gameList}</option>
    }