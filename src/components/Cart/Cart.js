import React, { Component } from 'react';
import axios from 'axios';

import Header from './Header';
import CartItems from './CartItems';

import './Scss/Cart.css';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cart: []
        }
    }

        // need a get request for the user cart and recipe table
    componentDidMount() {
        axios.get('http://localhost:3001/getcart')
            .then( response => {
                console.log(response);
                this.setState({
                    cart: response.data
                })
            })

        axios.get('http://localhost:3001/getrecipes')
    }


    render() {
        // need to map the cart items into the CartItems component
        let cartItems = this.state.cart.map( item => {
            return(
                <CartItems 
                    recipesid={item.recipesid}
                    userid={item.userid}
                    quantity={item.quantity}
                />
            )
        })



        return (
            <div className='cart-main'>
                <Header />
                { cartItems }
            </div>
        );
    }
}

export default Menu;