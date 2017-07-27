import React from 'react';

import './Scss/EmptyCart.css';

const EmptyCart = () => {
    return (
        <div className='empty-cart-main'>
            <p>Your cart is empty,</p>
            <p>go add some goodies!</p>
        </div>
    );
};

export default EmptyCart;