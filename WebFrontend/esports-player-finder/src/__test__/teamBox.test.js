import React from "react";
import { act, fireEvent, render, screen } from '@testing-library/react';
import TeamBox from "../components/teams/teamBox";

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
            <TeamBox teams={mockTeams}/>
        )});
    
    }, 15000)
    
    test("toggle pop up", () => {
        const togglePopup = jest.fn()
    
        act( () => {
            render(
                <TeamBox togglePopup={togglePopup()} teams={mockTeams}/>
        )});

        const box = screen.getByRole('img')
        fireEvent.click(box)
        expect(togglePopup).toHaveBeenCalled();
        expect(box).toBeDefined()
    }, 15000)
    
})
