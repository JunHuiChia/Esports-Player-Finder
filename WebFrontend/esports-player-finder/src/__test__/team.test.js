import React from "react";
import { act, fireEvent, render, screen } from '@testing-library/react';
import Team from "../components/teams/teams";
import { AppProvider } from "../contexts/AppContext"


test("Renders without crashing" , async() => {

    
    await act( async() =>{
        await render(
        <AppProvider>
            <Team/>
        </AppProvider>
    )})

}, 15000)

test("toggle pop up", async() => {
    const togglePopup = jest.fn()

    await act( async() =>{
        await render(
        <AppProvider>
            <Team togglePopup={togglePopup()}/>
        </AppProvider>
    )})

    const createTeam = screen.getByText(/Create Team/i)
    fireEvent.click(createTeam)
    expect(togglePopup).toHaveBeenCalled();
}, 15000)

test("searched for team", async() => {
    const searchedTrue = jest.fn()

    await act( async() =>{
        await render(
        <AppProvider>
            <Team searchedTrue={searchedTrue()}/>
        </AppProvider>
    )})

    const searchTeam = screen.getByText(/Search/i)
    fireEvent.click(searchTeam)
    expect(searchedTrue).toHaveBeenCalled();
}, 15000)