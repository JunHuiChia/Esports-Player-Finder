import React from "react";
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import PrivateRoute from '../components/routes/PrivateRoute';
import { act, render } from "@testing-library/react";
import { AppProvider } from "../contexts/AppContext"



it('renders without crashing', async() => {
    const history = createMemoryHistory()

    await act( async () => {
        render(
            <AppProvider>
                <Router history={history}>
                    <PrivateRoute />
                </Router>
            </AppProvider>
        )
    })


}, 15000);
