import React from 'react';

import './Scss/Delivery.css';

const Delivery = () => {
    return (
        <div className='cart-delivery-main row'>
            <p className='col-sm-6'>pick your delivery date:</p>
            <select className='col-sm-6'>
                <option>MONDAY</option>
                <option>TUESDAY</option>
                <option>WEDNESDAY</option>
                <option>THURSDAY</option>
                <option>FRIDAY</option>
            </select>
        </div>            
    );
};

export default Delivery;