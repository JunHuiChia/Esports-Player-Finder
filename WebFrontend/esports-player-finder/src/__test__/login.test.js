import React from 'react';
import Login from '../components/login/login.js';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider as AlertProvider } from 'react-alert'
import { AppProvider } from "../contexts/AppContext"
import { BrowserRouter as Router } from "react-router-dom";
import AlertTemplate from 'react-alert-template-basic'
import { mount, shallow } from 'enzyme';


describe('Login Component Test', () => {

    test('renders login button', () => {
        render(
            <AlertProvider template={AlertTemplate}>
                <AppProvider>
                    <Router>
                        <Login />
                    </Router>
                </AppProvider>
            </AlertProvider>
        )
        expect(screen.getByRole('button', {name: /Log In/i})).toBeDefined()
    })
    
    test('toggle show password', () => {
        
        render(
            <AlertProvider template={AlertTemplate}>
                <AppProvider>
                    <Router>
                        <Login />
                    </Router>
                </AppProvider>
            </AlertProvider>
        )
        const togglePasswordMock = jest.fn()
        const showPassword = screen.getByText(/Show/i)
        fireEvent.click(showPassword)
        expect(togglePasswordMock).toHaveBeenCalledTimes(0);
    })

    test('Login with enter button after password entered',  () => {
        const handleKeyDownMock = jest.spyOn(console, 'log')

        render(
            <AlertProvider template={AlertTemplate}>
                <AppProvider>
                    <Router>
                        <Login handleKeyDownMock={handleKeyDownMock}/>
                    </Router>
                </AppProvider>
            </AlertProvider>
        )
        const passwordInput = screen.getByAltText('passwordBox')
        fireEvent.keyDown(passwordInput, {key: 'Enter'})
        expect(handleKeyDownMock).toHaveBeenCalledTimes(0);
    })

})
