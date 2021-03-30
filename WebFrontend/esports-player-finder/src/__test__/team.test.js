import React from "react";
import { act, fireEvent, render, screen } from '@testing-library/react';
import Team from "../components/teams/teams";
import { AppProvider } from "../contexts/AppContext"


test("Renders without crashing" , () => {

    render(
        <AppProvider>
            <Team />
        </AppProvider>
    )

})

test("toggle pop up", () => {
    const togglePopup = jest.fn()

    act( () =>{
        render(
        <AppProvider>
            <Team togglePopup={togglePopup()}/>
        </AppProvider>
    )})

    const createTeam = screen.getByText(/Create Team/i)
    fireEvent.click(createTeam)
    expect(togglePopup).toHaveBeenCalled();
})

test("searched for team", () => {
    const searchedTrue = jest.fn()

    act( () =>{
        render(
        <AppProvider>
            <Team searchedTrue={searchedTrue()}/>
        </AppProvider>
    )})

    const searchTeam = screen.getByText(/Search/i)
    fireEvent.click(searchTeam)
    expect(searchedTrue).toHaveBeenCalled();
})