import React from "react";
import { render, screen } from '@testing-library/react';
import Profile from "../components/profile/profile";
import { AppProvider } from "../contexts/AppContext"
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

describe("Profile component test" , () => {
    

    test("Renders without crashing" , () => {
        const history = createMemoryHistory();

        render(
            <AppProvider>
                <Router history={history}>
                    <Profile />
                </Router>
            </AppProvider>
        )
    })

    test("get team function works", () => {
        const history = createMemoryHistory();
        const getTeamByID = jest.fn()
        const getTeamData = jest.fn()

        render(
            <AppProvider>
                <Router history={history}>
                    <Profile getTeamByID={getTeamByID()} getTeamData={getTeamData()}/>
                </Router>
            </AppProvider>
        )

        expect(getTeamByID).toHaveBeenCalled();
        expect(getTeamData).toHaveBeenCalled();

    })



})