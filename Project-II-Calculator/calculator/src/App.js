import React from 'react';
import './App.css';

// import custom components
import NumberButton from "./components/ButtonComponents/NumberButton";

const App = () => {
  return (
    <div className="app grid-container">
      <NumberButton gridItem="item3" buttonType="symbol" text="/" />
      <NumberButton gridItem="item4" buttonType="number" text="7" />
      <NumberButton gridItem="item5" buttonType="number" text="8" />
      <NumberButton gridItem="item6" buttonType="number" text="9" />
      <NumberButton gridItem="item7" buttonType="symbol" text="x" />
      <NumberButton gridItem="item8" buttonType="number" text="4" />
      <NumberButton gridItem="item9" buttonType="number" text="5" />
      <NumberButton gridItem="item10" buttonType="number" text="6" />
      <NumberButton gridItem="item11" buttonType="symbol" text="-" />
      <NumberButton gridItem="item12" buttonType="number" text="1" />
      <NumberButton gridItem="item13" buttonType="number" text="2" />
      <NumberButton gridItem="item14" buttonType="number" text="3" />
      <NumberButton gridItem="item15" buttonType="symbol" text="+" />
      <NumberButton gridItem="item16" buttonType="number" text="0" />
      <NumberButton gridItem="item17" buttonType="symbol" text="=" />
    </div>
  );
};

export default App;
