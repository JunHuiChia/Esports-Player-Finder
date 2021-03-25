import {React, useContext} from 'react';
import PropTypes from 'prop-types'
import { AppContext } from "../../../contexts/AppContext";

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
 * @prop {string} id - The id of the game_role of the user
 */
function GameRole( {game, role, id} ){

    const appContext = useContext(AppContext);
    const { deleteGameRole } = appContext;

    function deleteRole(){
        deleteGameRole(id)
    }

    return (
        <div className="gameRoles">
            <div className="profileGame Game">Game: <p>{game}</p></div>
            <div className="profileGame Role ">Role: <p>{role}</p></div>
            <button className="deleteRoleBtn" onClick={deleteRole}>Delete</button>
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