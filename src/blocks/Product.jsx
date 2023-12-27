import React from "react";
import "./Product.css";
import { useState } from "react";

const Product = (params) => {
    const [quantity, setQuantity] = useState(0);

    function addProduct() {
        setQuantity(quantity + 1);
        params.callback(params.price);
    }

    function removeProduct() {
        if (quantity > 0) {
            setQuantity(quantity - 1);
            params.callback(-params.price);
        }
    }

    return (
        <div className='product-card-container'>
            <div className='product-card'>
                <img
                    src={params.image}
                    alt={params.alt}
                    className='product-image'
                />
                <h2 className='product-price'>{params.price} р</h2>
                <h3 className='product-name'>{params.name}</h3>
                <div className='controls-block'>
                    <button className='minus-button' onClick={removeProduct}>
                        -
                    </button>
                    <h3 className='quantity-display'>{quantity}</h3>
                    <button className='plus-button' onClick={addProduct}>
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
