import React from 'react';
import GameRole from '../components/profile/gameRole/gameRole.js';
import { shallow} from 'enzyme';
import { render, screen } from '@testing-library/react';


test('Game role creates successfully', () => {

    const wrapper = shallow(<GameRole game='CSGO' role='Gunner'/>)

    expect(wrapper.find('div.profileGame')).toHaveLength(2);
    
})

test('Game and role are of expected value', () => {

    const wrapper = shallow(<GameRole game='CSGO' role='Gunner'/>)

    expect(wrapper.find('div.Game').text()).toEqual('Game: CSGO')
    expect(wrapper.find('div.Role').text()).toEqual('Role: Gunner')
    
})