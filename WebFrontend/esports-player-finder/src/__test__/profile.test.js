import React from "react";
import { render, screen } from '@testing-library/react';
import Profile from "../components/profile/profile";
import { AppProvider } from "../contexts/AppContext"
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'


test("Renders without crashing" , () => {
    const history = createMemoryHistory()


    render(
        <AppProvider>
            <Router history={history}>
                <Profile />
            </Router>
        </AppProvider>
    )

})