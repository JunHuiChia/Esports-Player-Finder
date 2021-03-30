import React from 'react';
import GameRole from '../components/profile/gameRole/gameRole.js';
import {act, render, screen } from '@testing-library/react';
import { AppProvider } from "../contexts/AppContext"



test('Game role creates successfully', async () => {

    await act( async () => {
        await render(
        <AppProvider>
            <GameRole game='CSGO' role='Gunner'/>
        </AppProvider>
    )});

    await expect(screen.getByText('Game:')).toBeInTheDocument()

}, 15000)

test('Game and role are of expected value', async () => {

    await act( async() => {
        await render(
    <AppProvider>
        <GameRole game='CSGO' role='Gunner'/>
    </AppProvider>
    )});

    await expect(screen.getByText('Game:')).toHaveTextContent('CSGO')
    
}, 15000)
