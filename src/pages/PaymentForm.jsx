import React, { useState } from "react";
import "./PaymentForm.css";
import { useSelector } from "react-redux";
import { usePayCardMutation } from "../redux";

const PaymentForm = (props) => {
    const number = useSelector(state => state.number);

    const [pin, setPin] = useState("");

    const [payCard, {isError}] = usePayCardMutation();

    const handlePayCard = async () => {
        await payCard({
            number: number,
            pin: pin,
        }).unwrap();
        
        props.history.push('/message/success');
    };

    const changePin = (event) => {
        setPin(event.target.value);
    };

    return (
        <div id='payment-form-wrapper' className='wrapper'>
            <div id='payment-form-container'>
                <div id='payment-form'>
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
                            onChange={changePin}
                        />
                    </div>
                    <div id='price-button-container'>
                        <h2 id='payment-form-price'>К оплате 100.00 р</h2>
                        <button id='payment-form-button' onClick={handlePayCard}>Оплатить</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentForm;
