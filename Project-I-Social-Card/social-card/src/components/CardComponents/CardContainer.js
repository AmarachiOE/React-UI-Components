import React from "react";
import "./Card.css";

// import custom components
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";

// create custom component
const CardContainer = () => {
  return (
    <div className="card-container">
      <CardBanner />
      <CardContent />
    </div>
  );
};

// export
export default CardContainer;

// import custom component on app.js file
