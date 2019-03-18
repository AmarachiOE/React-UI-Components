import React from "react";
import "./Footer.css";

// create custom component
const Footer = () => {
    return (
        <div className="footer-icons">
            <i className="far fa-comment"></i>
            <i className="fas fa-sync"> 6</i>
            <i className="far fa-heart"> 4</i>
            <i className="far fa-envelope"></i>
        </div>
    );
};

// export
export default Footer;