import React from 'react';
import GameSelection from '../components/profile/gameRole/gameSelection.js';
import { act , render, screen } from '@testing-library/react';


test("renders without crashing" , async () => {

    const game = {
        gameID: 1,
        game : "CSGO"
    }

    await act(async ()=> {
        await render(
        await <GameSelection {...game}/>
    )});

    expect(await screen.findByText("CSGO")).toBeInTheDocument();

}, 15000)