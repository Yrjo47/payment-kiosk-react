import React, { useState } from "react";
import "./PaymentForm.css";
import { useSelector } from "react-redux";
import { usePayCardMutation } from "../redux";
import { useNavigate } from "react-router-dom";

const PaymentForm = () => {
    const navigate = useNavigate();
    const number = useSelector((state) => state.number);
    const total = useSelector((state) => state.total);

    const [pin, setPin] = useState("");

    const [payCard, { isError }] = usePayCardMutation();

    const handlePayCard = async () => {
        const response = await payCard({
            number: number,
            pin: pin,
        });
        if (pin === "1111") {
            navigate("/message/success");
        } else if (pin == "1234") {
            navigate("/message/error2");
        } else {
            navigate("/message/error1");
        }
    };

    const changePin = (event) => {
        setPin(event.target.value);
    };

    return (
        <div id="payment-form-wrapper" className="wrapper">
            <div id="payment-form-container">
                <div id="payment-form">
                    <h2 id="payment-form-header">Оплата</h2>
                    <div className="label-input-container">
                        <label id="PIN-label">Введите PIN-код:</label>
                        <input
                            id="PIN-input"
                            type="text"
                            placeholder="_ _ _ _"
                            maxLength="4"
                            onChange={changePin}
                        />
                    </div>
                    <div id="price-button-container">
                        <h2 id="payment-form-price">{total} р</h2>
                        <button
                            id="payment-form-button"
                            onClick={handlePayCard}
                        >
                            Оплатить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentForm;
