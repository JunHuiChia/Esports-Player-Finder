import React from 'react';
import RoleSelection from '../components/profile/gameRole/roleSelection.js';
import {act, render, screen } from '@testing-library/react';


test("renders without crashing" , async () => {

    const roles = {
        role: {
            id: 1,
            name: "attack"
        }
    }

    await act( async() => {
        render(
            <RoleSelection {...roles}/>
        )
    })
    

    expect(await screen.findByText("attack")).toBeInTheDocument();

}, 15000)