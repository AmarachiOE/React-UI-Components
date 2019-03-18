// import react
import React from 'react';

// import styles
import './Header.css';

// create custom component
const HeaderContent = () => {
    return (
        <div className="header-content-container">
            <div className="header-top-line">
                <p className="header-title">
                    <strong>Lambda School</strong>
                </p>
                <p className="gray"> @LambdaSchool * 26 jan</p>
            </div>
            <p className="header-body-text">Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components, you are well on your way to mastering React!</p>
        </div>

    );
};

// export component
export default HeaderContent;
