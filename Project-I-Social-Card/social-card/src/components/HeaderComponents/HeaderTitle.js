// import react
import React from "react";

// import styles
import "./Header.css";

// create custom component
const HeaderTitle = () => {
  return (
    <div className="header-top-line">
      <p className="header-title">
        <strong>Lambda School</strong>
      </p>
      <p className="gray"> @LambdaSchool * 26 jan</p>
    </div>
  );
};

// export component
export default HeaderTitle;
