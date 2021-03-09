import React, { useContext } from "react";
import { Route, Redirect } from 'react-router-dom';
import { AppContext } from "../../contexts/AppContext";


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