import React from 'react';
import './Button.css';


const ActionButton = props => {
    return <button className={`basicButtonStyles ${props.gridItem} ${props.buttonStyle}`}> {props.text} </button>;
};

export default ActionButton;

// import custom component on app.js file