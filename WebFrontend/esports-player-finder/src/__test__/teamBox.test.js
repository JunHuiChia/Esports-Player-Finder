import React from "react";
import { act, fireEvent, render, screen } from '@testing-library/react';
import TeamBox from "../components/teams/teamBox";
import { Provider as AlertProvider } from 'react-alert'
import { AppProvider } from "../contexts/AppContext"
import { BrowserRouter as Router } from "react-router-dom";
import AlertTemplate from 'react-alert-template-basic'


describe("TeamBox component test", () => {
    
    const mockTeams = {
        teams: {
            team_name: "Team1",
            game_name: "CSGO"
        }
    }

    test("Renders without crashing", () => {
    
        act( () => {
            render(
            <AlertProvider template={AlertTemplate}>
                <AppProvider>
                    <Router>
                        <TeamBox teams={mockTeams}/>    
                    </Router>
                </AppProvider>
            </AlertProvider>
        )});
    
    }, 15000)
    
    test("toggle pop up", () => {
        const togglePopup = jest.fn()
    
        act( () => {
            render(
            <AlertProvider template={AlertTemplate}>
                <AppProvider>
                    <Router>
                        <TeamBox togglePopup={togglePopup()} teams={mockTeams}/>    
                    </Router>
                </AppProvider>
            </AlertProvider>
        )});

        const box = screen.getByRole('img')
        fireEvent.click(box)
        expect(togglePopup).toHaveBeenCalled();
        expect(box).toBeDefined()
    }, 15000)
    
})
