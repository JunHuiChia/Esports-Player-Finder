import React from "react";
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import PrivateRoute from '../components/routes/PrivateRoute';
import { render } from "@testing-library/react";
import { AppProvider } from "../contexts/AppContext"



it('renders without crashing', () => {
    const history = createMemoryHistory()

    render(
        <AppProvider>
            <Router history={history}>
                <PrivateRoute />
            </Router>
        </AppProvider>
    )

});
