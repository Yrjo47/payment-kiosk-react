import React from "react";
import "./Main.css";
import Product from "../blocks/Product";
import itwister from "../static/itwister.png";
import { useState } from "react";

export const Main = () => {
    const [total, setTotal] = useState(0);

    const totalPriceCallback = (price) => {
        setTotal(total + price);
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
                <h2 id='product-price-display'>{total} р.</h2>
                <button id='product-pay-button'>Перейти к оплате</button>
            </div>
        </div>
    );
};

export default Main;
