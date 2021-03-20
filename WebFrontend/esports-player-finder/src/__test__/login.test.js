import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../components/login/login.js';
import { useAlert } from 'react-alert'
import { shallow, mount } from 'enzyme';
import AlertManager from 'react-alert'
import { render, screen } from '@testing-library/react';


describe('Login Component Test', () => {
    render(
        <Login />
    )
    
    //Expects one button
    expect(screen.getByRole('button')).toHaveLength(1);

    expect(screen.getByRole('button').text()).toEqual('Log In')

})
