import {React, useContext, useEffect} from 'react';
import './profile.css';
import { AppContext } from "../../contexts/AppContext";
import TeamContent from "../teams/TeamContent.js";

import {Link} from "react-router-dom";


/**
 *  Component for profile page
 * @component
 * @returns 
 * HTML for profile page
 */

const Profile = () => {
    const appContext = useContext(AppContext);
    const {
        userName,
        getGames,
        checkDetails,
        userTeamID,
        getTeamByID,
        teamData,
        userTeamData,
        setUserTeamData,
    } = appContext;
    
    for(const teamID of userTeamID){
        console.log("Getting teams");
        getTeamByID(teamID.id);
    }
    
    function test() {
        console.log(userTeamData);
    }

    useEffect(() =>{
        getGames();
        checkDetails();
    }, [])


    
    return(
        <div id="profilePage" className="rounded-md">
            <div className="mx-16 mt-8 profileTitle">
                <span>Welcome back! <span className="font-semibold">{userName}</span> </span>
                <Link to="/profile/edit" id="editProfile">Edit Profile</Link>
            </div>
            <div className="profilePageTeamContent mx-16 mt-5 mb-10 p-8"> 
                <span className="my-8 underline">Teams</span>
                <div>Team details here</div>
                
                <div onClick={test}>get</div>
            </div>
        </div>
    );
};

export default Profile;