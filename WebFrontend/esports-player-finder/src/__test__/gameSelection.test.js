import React from 'react';
import GameSelection from '../components/profile/gameRole/gameSelection.js';
import { render, screen } from '@testing-library/react';


test("renders without crashing" , async () => {

    const game = {
        gameID: 1,
        game : "CSGO"
    }

    render(
        <GameSelection {...game}/>
    )

    expect(await screen.findByText("CSGO")).toBeInTheDocument();

})