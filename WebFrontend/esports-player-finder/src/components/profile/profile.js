import {React, useContext} from 'react';
import './profile.css';
import { AppContext } from "../../contexts/AppContext";
import TeamContent from "../teams/TeamContent.js";

import {Link} from "react-router-dom";



const Profile = () => {
    const appContext = useContext(AppContext);
    const {
        userName
    } = appContext;

    const teamName = "Team Gamer"
    const teamName2 = "Team Noobs"

    return(
        <div id="profilePage" className="rounded-md">
            <div className="mx-16 mt-8 profileTitle">
                <span>Welcome back! <span className="font-semibold">{userName}</span> </span>
                <Link to="/profile/edit" id="editProfile">Edit Profile</Link>
            </div>
            <div className="profilePageTeamContent mx-16 mt-5 mb-10 p-8"> 
                <span className="my-8 underline">Teams</span>
                <div className="userTeams my-6">
                    <TeamContent teamName={teamName}/>
                    <TeamContent teamName={teamName2}/> 
                </div>
                
            </div>
        </div>
    );
};

export default Profile;