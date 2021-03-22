import React from 'react';


/**
 *  Component for adding new game roles
 *  @component
 * 
 * @returns 
 * HTML for creating a team
 */
function CreateTeamPopup() {

    return (
        <>
            <div className="createTeam">
                <div className="createTeamDetails teamDetailsLabels">
                    <label htmlFor="teamName">Team Name:</label>
                    <label htmlFor="">Game: </label>
                    <label htmlFor="">more... : </label>
                </div>

                <div className="createTeamDetails teamDetailsInput" >
                    <input name="teamName"></input>
                    <input name=""></input>
                    <input name=""></input>
                </div>
            </div>
            <div className="createBtnDiv">
                <button>Create</button>
            </div>
        </>
    )
}



export default CreateTeamPopup;