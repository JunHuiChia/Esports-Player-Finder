import React from 'react';
import NewGameRole from '../components/profile/gameRole/newGameRole.js';
import { mount, shallow} from 'enzyme';
import { render, screen } from '@testing-library/react';
import { AppProvider } from "../contexts/AppContext"




test('Game role creates successfully', () => {
    const gameRole = {
        games: [{
            "id": 1,
            "game_id": 1,
            "name": "testgamerole1",
            "created_at": "2021-03-20T18:55:39.000000Z",
            "updated_at": "2021-03-20T18:55:39.000000Z",
            "user_game_role": {
                "id": 1,
                "user_id": 1,
                "game_role_id": 1
            },
            "game": {
                "id": 1,
                "name": "testgame",
                "created_at": "2021-03-20T18:55:57.000000Z",
                "updated_at": "2021-03-20T18:55:58.000000Z"
            }
        },
        {
            "id": 2,
            "game_id": 1,
            "name": "testgamerole2",
            "created_at": "2021-03-20T18:55:39.000000Z",
            "updated_at": "2021-03-20T18:55:39.000000Z",
            "user_game_role": {
                "id": 2,
                "user_id": 1,
                "game_role_id": 2
            },
            "game": {
                "id": 1,
                "name": "testgame",
                "created_at": "2021-03-20T18:55:57.000000Z",
                "updated_at": "2021-03-20T18:55:58.000000Z"
            }
        }]}

    const wrapper = mount(
        <AppProvider>
            <NewGameRole {...gameRole}/>
        </AppProvider>
    )

})
