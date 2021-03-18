import {React, useContext} from 'react';
import './profile.css';
import { AppContext } from "../../contexts/AppContext";

import {Link} from "react-router-dom";


function ProfileEdit(){
    const appContext = useContext(AppContext);
    const {
        userName,
        userEmail,
        userPassword,
        handleUserEmail,
        handleUserPassword,
        login,
        checkDetails,
        errorMessage,
        loginStatus,
    } = appContext;

    return (
        <div id="profilePageEdit" className="rounded-md">
            <div className="mx-16 mt-8 profileTitle">
                <span>Edit Profile</span>
                <Link to="/profile" id="doneProfile">Profile</Link>
            </div>

            <div className="mb-8 editProfileSection">
                <div className="editContent mx-10 my-10">
                    <span className="contentTitle">Profile</span>
                    <div className="userDetails">
                        <div className="profileUsername ">Username: {userName}</div>
                        <label htmlFor="username">New username: </label>
                        <div className="newUsername inputs">
                            <input name="username" id="changeUsernameNew" type="text"></input>
                        </div>
                    </div>
                </div>
                <div className="editContent mx-10 my-10">
                    <span className="contentTitle">Game Roles</span>
                    <div className="userDetails">
                        <div className="profileGame ">Game: League of legends</div>
                        <div className="profileGame Role ">Role: ADC</div>
                    </div>
                </div>
                <div className="editContent mx-10 my-10">
                    <span className="contentTitle">Email</span>
                    <div className="userDetails">
                        <div className="profileEmail">Email: {userEmail}</div>
                        <label htmlFor="email">New email: </label>
                        <div className="newEmail inputs">
                            <input name="email" id="changeEmailNew" type="text"></input>
                        </div>
                    </div>
                </div>
                <div className="editContent mx-10 my-10">
                    <span className="contentTitle">Password</span>
                    <div className="userDetails">
                        <label htmlFor="currentPassword">Current password: </label>
                        <div className="passwordInput inputs">
                            <input name="currentPassword" id="changePasswordCurrent" type="password" ></input>
                        </div>
                    </div>
                    <div className="userDetails">
                        <label htmlFor="newPassword">New password: </label>
                        <div className="passwordInput inputs">
                            <input name="newPassword" id="changePasswordNew" type="password"></input>
                        </div>
                    </div>
                </div>
            </div>
            <div className="submit-button pb-10">
                <button>Submit</button>
            </div>
        </div>
    
    
    
    
    );

}

export default ProfileEdit;