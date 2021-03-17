import React, { useContext } from "react";
import ReactDOM from 'react-dom';
import Header from './header';
import { AppContext } from "../../contexts/AppContext";


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
});