import React from 'react';
import './teams.css';

export default class Teams extends React.Component{

    render(){
        return(
            <div id="teamPage">

                <div id="teamList">Available Teams</div>
                <div id="createTeam"> 
                    <button className="createTeamBtn">Create team</button>
                </div>
            </div>
        )
    }
}