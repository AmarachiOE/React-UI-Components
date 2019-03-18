// import react
import React from 'react';

// import styles
import './Header.css';

// import custom components
// import HeaderTitle from "./HeaderTitle"; 
// now combined this with HeaderContent to make styling easier
import HeaderContent from "./HeaderContent";
import ImageThumbnail from "./ImageThumbnail";

// create custom component
const HeaderContainer = () => {
    return (
        <div className="header-container">
            <ImageThumbnail />
            <HeaderContent />
        </div>
    );
}

// export
export default HeaderContainer;

// import custom component on app.js file
