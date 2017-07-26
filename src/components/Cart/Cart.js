import React, { Component } from 'react';
import axios from 'axios';

import Header from './Header';
import CartItems from './CartItems';
import Delivery from './Delivery';
import CartButtons from './CartButtons';

import './Scss/Cart.css';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cart: [],
            loggedIn: {},
            quantity: 0
        }

        this.deleteItem = this.deleteItem.bind(this);
        this.getCart = this.getCart.bind(this);
        this.changeQuantity = this.changeQuantity.bind(this);
        this.updateQuantity = this.updateQuantity.bind(this);
    }

        // need a get request for the user cart and recipe table
    componentDidMount() {
        this.getCart()

        axios.get('http://localhost:3001/auth/me')
            .then( response => {
                this.setState({
                    loggedIn: response.data
                })
            })
    }   
    
    getCart() {
        axios.get('http://localhost:3001/getcart')
            .then( response => {
                this.setState({
                    cart: response.data
                })
            })
    }

    deleteItem(id) {

        axios.delete('http://localhost:3001/deleteitem', {params: {recipesid: id}})
            .then( () => {
                console.log("HEYYYYYY");
                setTimeout(() => {
                    this.getCart();
                },1)
            })
    }

    changeQuantity(e) {
        this.setState({
            quantity: e.target.value
        })
        // setTimeout( () => {
        //     console.log('CHANGED QUANTITY', this.state.quantity);
        //     this.updateQuantity()
        // }, 1);
    }

    updateQuantity(id) {
        let config = {
            quantity: this.state.quantity,
            recipeid: id
        }

        axios.put('http://localhost:3001/updatequantity', config)
            .then(response => {
                this.getCart()            
            })
    }


    render() {
        // need to map the cart items into the CartItems component
        let cartItems = this.state.cart.map( item => {
            return(
                <CartItems
                    deleteItem={this.deleteItem}
                    recipesid={item.recipesid}
                    userid={item.userid}
                    quantity={item.quantity}
                    thumbnail={item.recipethumbnail}
                    name={item.name}
                    price={item.price}
                    changeQuantity={this.changeQuantity}
                    updateQuantity={this.updateQuantity}
                />
            )
        })

        console.log('Updated', this.state.cart)

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