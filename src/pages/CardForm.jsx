import React from "react";
import "./CardForm.css";

const CardForm = () => {
    return (
        <div id='card-form-wrapper'>
            <div id='card-form-container'>
                <form id='card-form' action=''>
                    <h2 id='card-form-header'>Введите данные карты</h2>
                    <div className='label-input-container'>
                        <label for='card-number-input'>
                            Введите номер карты
                        </label>
                        <input
                            id='card-number-input'
                            type='text'
                            placeholder='0000 0000 0000 0000'
                            maxlength='16'
                        />
                    </div>
                    <div id='date-cvv-container'>
                        <div
                            className='label-input-container'
                            id='date-container'
                        >
                            <label for='date-input'>
                                Введите срок действия карты
                            </label>
                            <div id='date-container'>
                                <input
                                    id='month-input'
                                    type='text'
                                    maxlength='2'
                                    placeholder='MM'
                                />
                                <input
                                    id='year-input'
                                    type='text'
                                    maxlength='4'
                                    placeholder='YYYY'
                                />
                            </div>
                        </div>
                        <div className='label-input-container'>
                            <label for='cvv-input'>Введите CVV-код карты</label>
                            <input
                                type='text'
                                id='cvv-input'
                                placeholder='000'
                                maxLength={3}
                            />
                        </div>
                    </div>
                    <div id='card-form-button-container'>
                        <button id='card-form-button'>Подтвердить</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CardForm;
