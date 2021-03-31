import React from "react";
import { act, render } from '@testing-library/react';
import AvailableTeam from "../components/teams/availableTeam";

test("Renders without crashing", async() => {

    const teams = {
        teams: [
            {team_id: 1,},
            {team_id: 2}
        ]
    }

    await act(async() => {
        await render(
        await <AvailableTeam {...teams}/>
    )});

}, 15000)