import {React, useContext} from 'react';
import { AppContext } from "../../contexts/AppContext";


const Profile = () => {
    const appContext = useContext(AppContext);
    const {
        userName
    } = appContext;


    return(
        <div>
            <div>Profile Page</div>
            <span>Welcome {userName}</span>
        </div>
        
    );
};

export default Profile;