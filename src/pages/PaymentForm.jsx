import React from "react";
import "./PaymentForm.css";

const PaymentForm = () => {
    return (
        <div id='payment-form-wrapper' className='wrapper'>
            <div id='payment-form-container'>
                <form id='payment-form' action=''>
                    <h2 id='payment-form-header'>Оплата</h2>
                    <div className='label-input-container'>
                        <label id='PIN-label' for='card-number-input'>
                            Введите PIN-код:
                        </label>
                        <input
                            id='PIN-input'
                            type='text'
                            placeholder='_ _ _ _'
                            maxlength='4'
                        />
                    </div>
                    <div id='price-button-container'>
                        <h2 id='payment-form-price'>К оплате 100.00 р</h2>
                        <button id='payment-form-button'>Оплатить</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PaymentForm;
