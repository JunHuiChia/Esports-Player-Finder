import React from "react";
import {act, render } from '@testing-library/react'
import Popup from '../components/popup/popup'

it("Renders without crashing", async () => {
    
    await act( async() => {
        await render(
            <Popup/>
        )
    })
}, 15000) 