import React from "react";
import { render, screen } from '@testing-library/react'
import Popup from '../components/popup/popup'

it("Renders without crashing", () => {
    render(
        <Popup/>
    )
} ) 