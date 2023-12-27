import React from "react";
import "./FinalScreen.css";
import errorImage from "../static/error.png";
import successImage from "../static/success.png";

const FinalScreen = () => {
    return (
        <div id='final-screen-wrapper' className='wrapper'>
            <div className='final-screen-message-block' id='error-block'>
                <img
                    className='final-screen-image'
                    src={errorImage}
                    alt='signifies an error'
                />
                <h1 class='message-text' id='error-message'>
                    Ошибка при оплате! Проверьте данные.
                </h1>
            </div>
            <div className='final-screen-message-block' id='success-block'>
                <img
                    className='final-screen-image'
                    src={successImage}
                    alt='signifies success operation'
                />
                <h1 class='message-text' id='success-message'>
                    Успешно
                </h1>
            </div>
        </div>
    );
};

export default FinalScreen;
