import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Scss/CartButtons.css';

class CartButtons extends Component {
    render() {

        return (
            <div className='buttons-main'>
                <div className='row'>
                    <stupid className='button-shop col-md-6 col-sm-12'>
                        <button><Link to='/recipes' className='link'>CONTINUE SHOPPING</Link></button>
                    </stupid>
                    <stupid className='button-checkout col-md-6 col-sm-12'>
                        <button>CHECKOUT</button>
                    </stupid>
                </div>
            </div>
        );
    }
};

export default CartButtons;