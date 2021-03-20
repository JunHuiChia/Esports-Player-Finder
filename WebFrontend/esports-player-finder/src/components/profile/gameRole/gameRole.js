import React from 'react';
import PropTypes from 'prop-types'

/**
 *  Template of a game role
 *  @component GameRole
 *  @example
 *  const game = 'League of legends'
 *  const role = 'ADC'
 *  return (
 *      <GameRole game={game} role={role}/>
 *  )
 * @prop {string} game - The name of the game
 * @prop {string} role - The role of user in the game
 * 
 */
function GameRole( {game, role} ){

    return (
        <div className="userDetails gameRoles">
            <div className="profileGame ">Game: <p>{game}</p></div>
            <div className="profileGame Role ">Role: <p>{role}</p></div>
        </div>
    )
}


GameRole.propTypes = {
    /**
     * Name of the Game
     */
    game: PropTypes.string.isRequired,
    /**
     * Role in the game
     */
    role: PropTypes.string.isRequired,
}

GameRole.defaultProps = {
    game: null,
    role: null,
}


export default GameRole;