import React from 'react';

/**
 *  Returns a list of options for choosing games
 *  @component
 *  @example
 *  const game = 'League of legends'
 *  return (
 *      <option value={game.game}>{game.game}</option>
 *  )
 * @prop {string} game - The name of the game
 * @returns
 * <select> 
 *      <option value="League of legends">League of Legends</option>
 * </select>
 */

function GameSelection(game){
        return <option key={game.gameID} value={game.gameID}>{game.game}</option>
    }

export default GameSelection