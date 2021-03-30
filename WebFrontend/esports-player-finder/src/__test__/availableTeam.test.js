import React from "react";
import { render } from '@testing-library/react';
import AvailableTeam from "../components/teams/availableTeam";

test("Renders without crashing", () => {

    const teams = {
        teams: {
            team : {
                team_id: 1,
                name: "Team1",
            }
        }
    }

    render(
        <AvailableTeam teams={teams}/>
    )

})