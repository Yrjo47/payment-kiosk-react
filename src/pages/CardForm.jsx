import React, { useState } from "react";
import "./CardForm.css";
import { useCheckCardInfoMutation } from "../redux";
import { useDispatch } from "react-redux";
import {actions} from "../redux/cardNumberSlice"
import { useNavigate } from 'react-router-dom';

const CardForm = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [number, setNumber] = useState("");
    const [date, setDate] = useState(0);
    const [cvv, setCvv] = useState("");

    const [checkCardDetails, {isError}] = useCheckCardInfoMutation();

    const handleCheckCardDetails = async () => {
        let response = await checkCardDetails({
            number: number,
            date: date,
            cvv: cvv,
        }).unwrap();
        console.log(response);
        navigate('/payment');
    };

    const changeNumber = (event) => {
        setNumber(event.target.value);
        dispatch(actions.changeNumber(number));
    };
    const changeMonth = (event) => {
        setDate(date - (date % 10) + event.target.value);
    };
    const changeYear = (event) => {
        setDate((date % 10) + event.target.value * 100);
    };
    const changeCvv = (event) => {
        setCvv(event.target.value);
    };

    return (
        <div id='card-form-wrapper'>
            <div id='card-form-container'>
                <div id='card-form'>
                    <h2 id='card-form-header'>Введите данные карты</h2>
                    <div className='label-input-container'>
                        <label>Введите номер карты</label>
                        <input
                            id='card-number-input'
                            type='text'
                            placeholder='0000 0000 0000 0000'
                            maxLength='16'
                            onChange={changeNumber}
                        />
                    </div>
                    <div id='date-cvv-container'>
                        <div
                            className='label-input-container'
                            id='date-container'
                        >
                            <label>Введите срок действия карты</label>
                            <div id='date-container'>
                                <input
                                    id='month-input'
                                    type='text'
                                    maxLength='2'
                                    placeholder='MM'
                                    onChange={changeMonth}
                                />
                                <input
                                    id='year-input'
                                    type='text'
                                    maxLength='4'
                                    placeholder='YYYY'
                                    onChange={changeYear}
                                />
                            </div>
                        </div>
                        <div className='label-input-container'>
                            <label>Введите CVV-код карты</label>
                            <input
                                type='text'
                                id='cvv-input'
                                placeholder='000'
                                maxLength={3}
                                onChange={changeCvv}
                            />
                        </div>
                    </div>
                    <div id='card-form-button-container'>
                        <button
                            id='card-form-button'
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
