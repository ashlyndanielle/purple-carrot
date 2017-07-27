import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import pubKey from './StripeKey';
import axios from 'axios';

class Checkout extends Component {
    constructor(props){
        super(props);
    }

    onToken = (token) => {
        token.card = void 0;
        console.log('token', token);
        axios.post('http://localhost:3001/payment', { token, amount: 100 } ).then(response => {
            alert('Thank You!')
            
        });
    }


    render() {

        const stripePayment = (<StripeCheckout 
            token={this.onToken}
            stripeKey={pubKey.pub_key}
            amount={100}
            currency={'USD'}
            locale="auto"
        />);


        return (
            <div>
                {stripePayment}
            </div>
        );
    }
}

export default Checkout;