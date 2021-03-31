import {React, useContext, useEffect} from 'react';
import './profile.css';
import { AppContext } from "../../contexts/AppContext";
import ProfileTeamContent from "./userTeam/profileTeamContent.js";

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
        setUserTeamData,
        userTeamDataDetail,
        userTeamDataDetailStatus,
        setUserTeamDataDetailStatus,
    } = appContext;
    

    async function getTeamData(){
        setUserTeamData([])
        setUserTeamDataDetailStatus(false);
        for(const teamID of userTeamID){
            await getTeamByID(teamID.id)
        }
    }

    useEffect(() =>{
        getGames();
        checkDetails();
        getTeamData();
        return () => {}
    }, [])

    
    return(
        <div id="profilePage" className="rounded-md">
            <div className="mx-16 mt-8 profileTitle">
                <span>Welcome back! <span className="font-semibold">{userName}</span> </span>
                <Link to="/profile/edit" id="editProfile">Edit Profile</Link>
            </div>
            <div className="profilePageTeamContent mx-16 mt-5 mb-10 p-8"> 
                <span className="my-8 underline userTeamTitle">Teams</span>
                {userTeamDataDetailStatus && 
                    <ProfileTeamContent teamDetail={userTeamDataDetail}/>
                    }
            </div>
        </div>
    );
};

export default Profile;