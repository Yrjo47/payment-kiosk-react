import React from "react";
import "./Main.css";
import Product from "../blocks/Product";
import itwister from "../static/itwister.png";
import bigspecial from "../static/bigspecial.png";
import boxmaster from "../static/boxmaster.png";
import chickenP from "../static/chickenP.png";
import grand from "../static/grand.png";
import kapuchino from "../static/kapuchino.png";
import kartoshka from "../static/kartoshka.png";
import pirozhok from "../static/pirozhok.png";
import twister from "../static/twister.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actions } from "../redux/totalSlice";
import menu from "../menu/menu";

export const Main = () => {
    const [totalPrice, setTotal] = useState(0);
    const dispatch = useDispatch();

    const totalPriceCallback = (price) => {
        setTotal((prev) => prev + price);
        dispatch(actions.changeTotal(totalPrice));
    };

    return (
        <div id="main-page-wrapper" className="wrapper">
            <div id="product-gallery-wrapper">
                <div id="product-gallery-section">
                    {menu.map((product) => (
                        <Product
                            image={product.image}
                            alt={product.alt}
                            price={product.price}
                            name={product.name}
                            callback={totalPriceCallback}
                        />
                    ))}
                </div>
            </div>
            <div id="product-pay-button-section">
                <h2 id="product-price-display">{totalPrice} р.</h2>
                <Link to="/card" id="product-pay-button">
                    Перейти к оплате
                </Link>
            </div>
        </div>
    );
};

export default Main;
