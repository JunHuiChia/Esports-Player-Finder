import React from 'react';

/**
 *  Returns a list of options for choosing roles
 *  @component
 *  @example
 *  const game = {
 *      game_role: { 1: ADC, 2: TOP}
 *  }
 *  return (
 *      <option value={game.game_roles}>{game.game_roles}</option>
 *  )
 * @prop {string} role - The role in the game
 * @returns
 * <select> 
 *      <option value="ADC">ADC</option>
 * </select>
 */

function RoleSelection(role){
        return <option key={role.role.id} value={role.role.id}>{role.role.name}</option>
    }

export default RoleSelection