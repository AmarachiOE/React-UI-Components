import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
    return <div className={`${props.gridItem} ${props.Style}`}> {props.text} </div>;
};

export default CalculatorDisplay;

// import custom component on app.js file