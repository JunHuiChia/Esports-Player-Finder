import React from 'react';
import GameRole from '../components/profile/gameRole/gameRole.js';
import { shallow} from 'enzyme';
import { render, screen } from '@testing-library/react';
import { AppContext } from "../contexts/AppContext";
import { AppProvider } from "../contexts/AppContext"



test('Game role creates successfully', () => {

    render(
        <AppProvider>
            <GameRole game='CSGO' role='Gunner'/>
        </AppProvider>
    )
    expect(screen.getByText('Game:')).toBeInTheDocument()

})

test('Game and role are of expected value', () => {

    render(
    <AppProvider>
        <GameRole game='CSGO' role='Gunner'/>
    </AppProvider>
    )

    expect(screen.getByText('Game:')).toHaveTextContent('CSGO')
    
})
