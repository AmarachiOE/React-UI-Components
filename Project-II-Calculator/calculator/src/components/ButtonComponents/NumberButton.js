import React from 'react';
import './Button.css';

const NumberButton = props => {
    return <button className={`basicButtonStyles ${props.gridItem} ${props.buttonStyle}`}> {props.text} </button>;
};

// declare defaults... is this doing anything???
NumberButton.defaultProps = {
    buttonColor: 'white',
    // buttonColor: 'pink', works
};

export default NumberButton;

// import custom component on app.js file