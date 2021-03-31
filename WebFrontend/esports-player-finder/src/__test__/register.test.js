import React from 'react';
import Register from '../components/register/register.js';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider as AlertProvider } from 'react-alert'
import { AppProvider } from "../contexts/AppContext"
import { BrowserRouter as Router } from "react-router-dom";
import AlertTemplate from 'react-alert-template-basic'


describe('Login Component Test', () => {

    test('renders login button', () => {
        render(
            <AlertProvider template={AlertTemplate}>
                <AppProvider>
                    <Router>
                        <Register />
                    </Router>
                </AppProvider>
            </AlertProvider>
        )
        expect(screen.getByRole('button', {name: /Agree & Join/i})).toBeDefined()
    }, 15000)
    
    test('toggle show password', () => {
        
        render(
            <AlertProvider template={AlertTemplate}>
                <AppProvider>
                    <Router>
                        <Register />
                    </Router>
                </AppProvider>
            </AlertProvider>
        )
        const togglePasswordMock = jest.fn()
        const showPassword = screen.getByText(/Show/i)
        fireEvent.click(showPassword)
        expect(togglePasswordMock).toHaveBeenCalledTimes(0);
    }, 15000)

    test('Login with enter button after password entered',  () => {
        const signupMsg = jest.fn()
        const status = jest.fn()
        const signup = jest.fn(status)
        
        render(
            <AlertProvider template={AlertTemplate}>
                <AppProvider>
                    <Router>
                        <Register signupMsg={signupMsg()} signup={signup(status)}/>
                    </Router>
                </AppProvider>
            </AlertProvider>
        )
        const button = screen.getByRole('button')
        fireEvent.keyDown(button, {key: 'Click'})
        expect(signupMsg).toHaveBeenCalledTimes(1);
        expect(signup).toHaveBeenCalledTimes(1);
        expect(status).toHaveBeenCalledTimes(1);
    }, 15000)

})
