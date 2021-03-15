import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login.js';
import { useAlert } from 'react-alert'


it('renders without crashing', () => {

    const div = document.createElement('div');
    ReactDOM.render(<Login />, div);
});