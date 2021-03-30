import React from 'react';
import RoleSelection from '../components/profile/gameRole/roleSelection.js';
import { render, screen } from '@testing-library/react';


test("renders without crashing" , async () => {

    const roles = {
        role: {
            id: 1,
            name: "attack"
        }
    }

    render(
        <RoleSelection {...roles}/>
    )

    expect(await screen.findByText("attack")).toBeInTheDocument();

})