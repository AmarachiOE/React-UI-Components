// import react
import React from "react";

// import styles
import "./Header.css";

// create custom component
const ImageThumbnail = () => {
  return (
    <div className="header-img-container">
        <img
          className="header-img"
          src="https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png"
          alt="Lambda School Thumbnail"
        />
    </div>
  );
};

// export
export default ImageThumbnail;
