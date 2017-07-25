import React, { Component } from 'react';
import axios from 'axios';

import Header from './Header';
import CartItems from './CartItems';
import CartButtons from './CartButtons';

import './Scss/Cart.css';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cart: [],
            loggedIn: {},
        }
    }

        // need a get request for the user cart and recipe table
    componentDidMount() {
        axios.get('http://localhost:3001/getcart')
            .then( response => {
                console.log("What i want",response.data);
                this.setState({
                    cart: response.data
                })
            })

        axios.get('http://localhost:3001/auth/me')
            .then( response => {
                this.setState({
                    loggedIn: response.data
                })
            })
    }   


    render() {
        // need to map the cart items into the CartItems component
        let cartItems = this.state.cart.map( item => {
            console.log("HI",item)
            return(
                <CartItems
                    recipesid={item.recipesid}
                    userid={item.userid}
                    quantity={item.quantity}
                    thumbnail={item.recipethumbnail}
                    name={item.name}
                    price={item.price}
                />
            )
        })



        return (
            <div className='cart-main'>
                <Header />
                <div className='cart-items-container'>
                    { cartItems }
                </div>
                <CartButtons />
            </div>
        );
    }
}

export default Menu;