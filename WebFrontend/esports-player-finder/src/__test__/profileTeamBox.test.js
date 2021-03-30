import React from "react";
import { act, fireEvent, render, screen } from '@testing-library/react';
import ProfileTeamBox from "../components/profile/userTeam/profileTeamBox";

describe("TeamBox component test", () => {
    
    const mockTeam1 = {
            name: "Team1",
            game: {
                name:"CSGO"
            }
    }

    const mockTeam2 = {
            name: "Team1",
            game: {
                name:"League Of Legends"
            }
    }

    test("Renders without crashing", async() => {
    
        await act( async() => {
            render(
            <ProfileTeamBox teams={mockTeam1}/>
        )});
    
    }, 15000)
    
    test("toggle pop up", async() => {
        const togglePopup = jest.fn()
    
        await act( async() => {
            render(
                <ProfileTeamBox togglePopup={togglePopup()} teams={mockTeam2}/>
        )});

        const box = screen.getByRole('img')
        fireEvent.click(box)
        expect(togglePopup).toHaveBeenCalled();
        expect(box).toBeDefined()
    }, 15000)
    
})
