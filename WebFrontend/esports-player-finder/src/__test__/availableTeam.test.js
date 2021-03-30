import React from "react";
import { act, render } from '@testing-library/react';
import AvailableTeam from "../components/teams/availableTeam";

test("Renders without crashing", async() => {

    const teams = {
        teams: {
            team : {
                team_id: 1,
                name: "Team1",
            }
        }
    }

    await act(async() => {
        await render(
        await <AvailableTeam teams={teams}/>
    )});

}, 15000)