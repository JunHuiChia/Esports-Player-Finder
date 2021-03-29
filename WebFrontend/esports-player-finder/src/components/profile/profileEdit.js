import {React, useContext } from 'react';
import './profile.css';
import { AppContext } from "../../contexts/AppContext";

import {Link} from "react-router-dom";

import AddGameRole from './gameRole/addGameRole.js';
import NewGameRole from './gameRole/newGameRole.js';

/**
 *  Component for profile edit page
 * @component
 * @returns 
 * HTML for editing profile page
 */

function ProfileEdit(){

    const appContext = useContext(AppContext);
    const {
        userName,
        userEmail,
        gameList,
        updateEmail,
        updatePassword,
        updateUserAllDetail,
        updateUsername,
        errorMessage,
        userGameRoles,
        gameRoleError,
    } = appContext;


    function handleUpdateDetails(){
        let username = document.querySelector("#changeUsernameNew").value
        let email = document.querySelector("#changeEmailNew").value
        let password = document.querySelector("#changePasswordNew").value

        if(username !== "" && password !== "" && email !== ""){
            updateUserAllDetail(email,password,username)
        }else{
            if(username !== ""){
                updateUsername(username)
            }
            if(password !== ""){
                updatePassword(password)
            }
            if(email !== ""){
                updateEmail(email)
            }
        }
        document.querySelector("#changeUsernameNew").value = ""
        document.querySelector("#changePasswordNew").value = ""
        document.querySelector("#changeEmailNew").value = ""
    }


    return (
        <div id="profilePageEdit" className="rounded-md">
            <div className="mx-16 mt-8 profileTitle">
                <span>Edit Profile</span>
                <Link to="/profile" id="doneProfile">Profile</Link>
            </div>

            <div className="mb-8 editProfileSection">
                <div className="editContent mx-10 mt-10">
                    <span className="contentTitle">Profile</span>
                    <div className="userDetails">
                        <div className="profileUsername ">Username: {userName}</div>
                        <label htmlFor="username">New username: </label>
                        <div className="newUsername inputs">
                            <input name="username" id="changeUsernameNew" type="text"></input>
                        </div>
                    </div>
                </div>
                <div className="editContent mx-10 mt-10 gameSection">
                    <span className="contentTitle">Game Roles</span>
                    <div className="errorMessage">{gameRoleError}</div>
                    <AddGameRole games={gameList}/>
                    <NewGameRole games={userGameRoles}/>
                </div>
                <div className="editContent mx-10 mt-10">
                    <span className="contentTitle">Email</span>
                    <div className="userDetails">
                        <div className="profileEmail">Email: {userEmail}</div>
                        <label htmlFor="email">New email: </label>
                        <div className="newEmail inputs">
                            <input name="email" id="changeEmailNew" type="text"></input>
                        </div>
                    </div>
                </div>
                <div className="editContent mx-10 mt-10">
                    <span className="contentTitle">Password</span>
                    {/* <div className="userDetails">
                        <label htmlFor="currentPassword">Current password: </label>
                        <div className="passwordInput inputs">
                            <input name="currentPassword" id="changePasswordCurrent" type="password" ></input>
                        </div>
                    </div> */}
                    <div className="userDetails">
                        <label htmlFor="newPassword">New password: </label>
                        <div className="passwordInput inputs">
                            <input name="newPassword" id="changePasswordNew" type="password"></input>
                        </div>
                    </div>
                </div>
            </div>
            <div className="submit-button pb-10">
            <div className="errorMessage">{errorMessage}</div>
                <button onClick={handleUpdateDetails}>Submit</button>
            </div>
        </div>
    
    
    
    
    );

}

export default ProfileEdit;