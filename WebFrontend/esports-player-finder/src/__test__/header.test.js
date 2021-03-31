import React from "react";
import Header from '../components/header/header';
import { render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { AppProvider } from "../contexts/AppContext"



it('renders without crashing', () => {
    const history = createMemoryHistory()

    render(
        <AppProvider>
            <Router history={history}>
                <Header />
            </Router>
        </AppProvider>
    )

}, 15000);

it('Renders proper navigation', () => {
    const history = createMemoryHistory()

    render(
        <AppProvider>
            <Router history={history}>
                <Header />
            </Router>
        </AppProvider>
    )

    expect(screen.getByText(/Dashboard/)).toBeInTheDocument()
    expect(screen.getByText(/Teams/)).toBeInTheDocument()
    expect(screen.getByText(/Login/)).toBeInTheDocument()
    expect(screen.getByText(/Register/)).toBeInTheDocument()
    

}, 15000);
