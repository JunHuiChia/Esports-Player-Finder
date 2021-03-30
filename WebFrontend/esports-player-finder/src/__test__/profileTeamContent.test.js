import React from "react";
import { act, fireEvent, render, screen } from '@testing-library/react';
import ProfileTeamContent from "../components/profile/userTeam/profileTeamContent";

describe("TeamBox component test", () => {
    
    const mockTeams = {
        teamDetail: [
            {
                name: "Team1",
                game: {
                    name: "CSGO"
                }
            },
            {
                name: "Team2",
                game: {
                    name: "League Of Legends"
                }
            }
        ]
        
    }

    test("Renders without crashing", () => {
        act( () => {
            render(
            <ProfileTeamContent {...mockTeams}/>
        )});
    })
})
