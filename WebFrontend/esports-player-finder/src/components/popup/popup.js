import React from "react";
import './popup.css';

/**
 *  Component for popup pages
 *  @component
 * 
 * @prop {function} handleClose - function for handling the status of the popup page
 * @prop {HTML} content - HTML content to display on the popup page
 * @returns 
 * HTML for creating popup page
 */

const Popup = props => {
    return (
    <div className="popup-box">
        <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
        </div>
    </div>
    );
};

export default Popup;