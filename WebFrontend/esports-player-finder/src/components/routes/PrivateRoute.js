import React, { useContext } from "react";
import { Route, Redirect } from 'react-router-dom';
import { AppContext } from "../../contexts/AppContext";

/**
 *  Component for creating a team PopUp 
 * @component
 * @property {component} component - Takes in a component to redirect user to
 * @returns 
 * Routing for users that are or are not logged in. 
 */

const PrivateRoute = ({component: Component, ...rest}) => {
    const appContext = useContext(AppContext);
    const { loginStatus } = appContext;
    
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            loginStatus ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;