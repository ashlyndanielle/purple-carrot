import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import pubKey from './StripeKey';
import axios from 'axios';

import './Scss/CartButtons.css';

class CartButtons extends Component {


    onToken = (token) => {
        token.card = void 0;
        console.log('token', token);
        axios.post('http://localhost:3001/payment', { token, amount: this.props.cartTotal } ).then(response => {
            alert('Thank You!')
            
        });
    }

    render() {

        const stripePayment = (<StripeCheckout 
            token={this.onToken}
            stripeKey={pubKey.pub_key}
            amount={this.props.cartTotal * 100}
            currency={'USD'}
            locale="auto"
        />);

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
                        <Link to='/' className='payment'>{stripePayment}</Link>
                    </stupid>
                </div>
                <div className='buttons-main'>
                </div>
            </div>
        );
    }
};

export default CartButtons;