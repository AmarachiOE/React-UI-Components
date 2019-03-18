import React from "react";
import "./Card.css";

// create custom component
const CardBanner = () => {
    return (
        <div className="banner-img-container">
            <img
                className="banner-img"
                src="https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png"
                alt="React logo for banner"
            />
        </div>
    );
};

// export
export default CardBanner;
