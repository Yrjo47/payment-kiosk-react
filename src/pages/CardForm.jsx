import React, { useState } from "react";
import "./CardForm.css";
import { useCheckCardInfoMutation } from "../redux";
import { useDispatch } from "react-redux";
import { actions } from "../redux/cardNumberSlice";
import { useNavigate } from "react-router-dom";

const CardForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [cardForm, setCardForm] = useState({
        number: "",
        date: 0,
        cvv: "",
    });

    const [checkCardDetails, { isError }] = useCheckCardInfoMutation();

    const handleCheckCardDetails = async () => {
        let response = await checkCardDetails({
            number: cardForm.number,
            date: cardForm.date,
            cvv: cardForm.cvv,
        });
        // console.log(response);
        // if (cvv === "123") {
        //     navigate("/message/error1");
        // } else {
        //     navigate("/payment");
        // }
    };

    const handleCardForm = (e) => {
        let parametr = e.target.name;
        let value = e.target.value;
        if (parametr !== "month" && parametr !== "year") {
            setCardForm((prev) => ({
                ...prev,
                parametr: value,
            }));
        } else if (parametr === "month") {
            setCardForm((prev) => ({
                ...prev,
                date: prev.date - (prev.date % 10) + value,
            }));
        } else {
            setCardForm((prev) => ({
                ...prev,
                date: (prev.date % 10) + value * 100,
            }));
        }
    };

    return (
        <div id="card-form-wrapper">
            <div id="card-form-container">
                <div id="card-form">
                    <h2 id="card-form-header">Введите данные карты</h2>
                    <div className="label-input-container">
                        <label>Введите номер карты</label>
                        <input
                            id="card-number-input"
                            type="text"
                            name="number"
                            placeholder="0000 0000 0000 0000"
                            maxLength="16"
                            onChange={handleCardForm}
                        />
                    </div>
                    <div id="date-cvv-container">
                        <div
                            className="label-input-container"
                            id="date-container"
                        >
                            <label>Введите срок действия карты</label>
                            <div id="date-container">
                                <input
                                    id="month-input"
                                    type="text"
                                    name="month"
                                    maxLength="2"
                                    placeholder="MM"
                                    onChange={handleCardForm}
                                />
                                <input
                                    id="year-input"
                                    type="text"
                                    name="year"
                                    maxLength="4"
                                    placeholder="YYYY"
                                    onChange={handleCardForm}
                                />
                            </div>
                        </div>
                        <div className="label-input-container">
                            <label>Введите CVV-код карты</label>
                            <input
                                type="text"
                                id="cvv-input"
                                name="cvv"
                                placeholder="000"
                                maxLength={3}
                                onChange={handleCardForm}
                            />
                        </div>
                    </div>
                    <div id="card-form-button-container">
                        <button
                            id="card-form-button"
                            onClick={handleCheckCardDetails}
                        >
                            Подтвердить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardForm;
