// import react
import React from 'react';

// import styles
import './Header.css';

// import custom components
import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";
import ImageThumbnail from "./ImageThumbnail";

// create custom component
const HeaderContainer = () => {
    return(
        <div className="header-container">
        <HeaderTitle />
        <HeaderContent />
        <ImageThumbnail />
        </div>
    );
}

// export
export default HeaderContainer;

// import custom component on app.js file
 