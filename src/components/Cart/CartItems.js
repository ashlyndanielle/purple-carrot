import React from 'react';

import './Scss/CartItems.css';

const CartItems = (props) => {
    return (
        <div className='cart-items-main'>
            <div className='items-container'>
                <div className='item'>
                    <img src="" alt="recipe item"/>
                    <select className='delivery'>
                        <option>Delivery Date</option>
                    </select>
                    <div className='item-price'>
                        <select id="soflow">
                            <option>{props.quantity}</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                        </select>
                        <p>Price:</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems;