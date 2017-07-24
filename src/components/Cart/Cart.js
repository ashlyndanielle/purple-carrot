import React, { Component } from 'react';
import axios from 'axios';

import Header from './Header';
import CartItems from './CartItems';

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
                console.log("What i want",response);
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

        // axios.get('http://localhost:3001/getrecipes')
        //     .then( response => {
        //         // console.log('GIVE ME FOOD', response.data)
        //         this.setState({
        //             recipeDetail: response.data
        //         })
        //     })
    }   


    render() {
        // need to map the cart items into the CartItems component
        let cartItems = this.state.cart.map( item => {
            console.log("HI",item.recipethumbnail)
            return(
                <CartItems
                    className='items-container'
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
                { cartItems }
            </div>
        );
    }
}

export default Menu;