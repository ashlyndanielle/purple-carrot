import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Scss/CartButtons.css';

class CartButtons extends Component {
    render() {

        return (
            <div className='buttons-main-container'>
                <div className='total-price'>
                    <p>Cart Total:  ${this.props.cartTotal}</p>
                </div>
                <div className='row'>
                    <stupid className='button-shop col-sm-6'>
                        <button><Link to='/recipes' className='link'>CONTINUE SHOPPING</Link></button>
                    </stupid>
                    <stupid className='button-checkout col-sm-6'>
                        <button><Link to='/checkout' className='link'>CHECKOUT</Link></button>
                    </stupid>
                </div>
                <div className='buttons-main'>
                </div>
            </div>
        );
    }
};

export default CartButtons;