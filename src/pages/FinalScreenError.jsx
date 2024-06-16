import React from "react";
import "./FinalScreen.css";
import errorImage from "../static/error.png";

const FinalScreenError = (props) => {
    return (
        <div id="final-screen-wrapper" className="wrapper">
            <div className="final-screen-message-block" id="error-block">
                <img
                    className="final-screen-image"
                    src={errorImage}
                    alt="signifies an error"
                />
                <h1 className="message-text" id="error-message">
                    {props.message}
                </h1>
            </div>
        </div>
    );
};

export default FinalScreenError;
