import React from "react";
import "./Main.css";
import Product from "../blocks/Product";
import itwister from "../static/itwister.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../redux/totalSlice";

export const Main = () => {
    const total = useSelector((state) => state.total);
    console.log(total);

    const [totalPrice, setTotal] = useState(0);

    const dispatch = useDispatch();

    const totalPriceCallback = (price) => {
        dispatch(actions.changeTotal(totalPrice + price));
        setTotal(totalPrice + price);
    };

    return (
        <div id='main-page-wrapper' className='wrapper'>
            <div id='product-gallery-section'>
                <Product
                    image={itwister}
                    alt={"itwister photo"}
                    price={59.0}
                    name={"Смарт ролл"}
                    callback={totalPriceCallback}
                />
                <Product
                    image={itwister}
                    alt={"itwister photo"}
                    price={167.0}
                    name={"Смарт ролл"}
                    callback={totalPriceCallback}
                />
                <Product
                    image={itwister}
                    alt={"itwister photo"}
                    price={59.0}
                    name={"Смарт ролл"}
                    callback={totalPriceCallback}
                />
                <Product
                    image={itwister}
                    alt={"itwister photo"}
                    price={59.0}
                    name={"Смарт ролл"}
                    callback={totalPriceCallback}
                />
                <Product
                    image={itwister}
                    alt={"itwister photo"}
                    price={59.0}
                    name={"Смарт ролл"}
                    callback={totalPriceCallback}
                />
                <Product
                    image={itwister}
                    alt={"itwister photo"}
                    price={59.0}
                    name={"Смарт ролл"}
                    callback={totalPriceCallback}
                />
            </div>
            <div id='product-pay-button-section'>
                <h2 id='product-price-display'>{totalPrice} р.</h2>
                <Link to='/card' id='product-pay-button'>
                    Перейти к оплате
                </Link>
            </div>
        </div>
    );
};

export default Main;
