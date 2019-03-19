import React from 'react';
import './App.css';

// import custom components
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";

const App = () => {
  return (
    <div className="app grid-container">
      <ActionButton gridItem="item2" buttonStyle="action" text="clear"/>
      <NumberButton gridItem="item3" buttonStyle="symbol" text="/" />
      <NumberButton gridItem="item4" buttonStyle="number" text="7" />
      <NumberButton gridItem="item5" buttonStyle="number" text="8" />
      <NumberButton gridItem="item6" buttonStyle="number" text="9" />
      <NumberButton gridItem="item7" buttonStyle="symbol" text="x" />
      <NumberButton gridItem="item8" buttonStyle="number" text="4" />
      <NumberButton gridItem="item9" buttonStyle="number" text="5" />
      <NumberButton gridItem="item10" buttonStyle="number" text="6" />
      <NumberButton gridItem="item11" buttonStyle="symbol" text="-" />
      <NumberButton gridItem="item12" buttonStyle="number" text="1" />
      <NumberButton gridItem="item13" buttonStyle="number" text="2" />
      <NumberButton gridItem="item14" buttonStyle="number" text="3" />
      <NumberButton gridItem="item15" buttonStyle="symbol" text="+" />
      <ActionButton gridItem="item16" buttonStyle="action" text="0" />
      <NumberButton gridItem="item17" buttonStyle="symbol" text="=" />
    </div>
  );
};

export default App;
