import React from 'react';
import Login from '../components/login/login.js';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider as AlertProvider } from 'react-alert'
import { AppProvider } from "../contexts/AppContext"
import { BrowserRouter as Router } from "react-router-dom";
import AlertTemplate from 'react-alert-template-basic'


describe('Login Component Test', () => {
    render(
        <AlertProvider template={AlertTemplate}>
            <AppProvider>
                <Router>
                    <Login />
                </Router>
            </AppProvider>
        </AlertProvider>
    )
    
    test('renders login button', () => {
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

    test('Login with enter button after password entered', async () => {
        render(
            <AlertProvider template={AlertTemplate}>
                <AppProvider>
                    <Router>
                        <Login />
                    </Router>
                </AppProvider>
            </AlertProvider>
        )
        const handleKeyDown = jest.fn()
        const passwordInput = screen.getByAltText('passwordBox')
        fireEvent.keyDown(passwordInput, {key: 'Enter'})
        await expect(handleKeyDown).toHaveBeenCalledTimes(0);
    })
})
