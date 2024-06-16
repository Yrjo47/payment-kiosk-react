import React from "react";
import successImage from "../static/success.png";
import "./FinalScreen.css";

const FinalScreen = () => {
    return (
        <div id="final-screen-wrapper" className="wrapper">
            <div className="final-screen-message-block" id="success-block">
                <img
                    className="final-screen-image"
                    src={successImage}
                    alt="signifies success operation"
                />
                <h1 className="message-text" id="success-message">
                    Успешно!
                </h1>
            </div>
        </div>
    );
};

export default FinalScreen;
