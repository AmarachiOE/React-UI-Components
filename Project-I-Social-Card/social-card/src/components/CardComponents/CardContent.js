import React from "react";
import "./Card.css";

// create custom component
const CardContent = () => {
  return (
    <div className="content">
      <p className="content-title">
        <strong>Get started with React</strong>
      </p>
      <p>
        React makes it painless to create interactive UIs. Design simple views
        for each state in your application.
      </p>
      <p className="gray">reactjs.org</p>
    </div>
  );
};

// export
export default CardContent;
