import React, { Component } from 'react';
import axios from 'axios';

import Header from './Header';
import CartItems from './CartItems';
import CartButtons from './CartButtons';
import Checkout from './Checkout';
import EmptyCart from './EmptyCart';

import './Scss/Cart.css';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cart: [],
            loggedIn: {},
            quantity: 0,
            cartTotal: 0,
            fullCart: false
        }

        this.deleteItem = this.deleteItem.bind(this);
        this.getCart = this.getCart.bind(this);
        this.changeQuantity = this.changeQuantity.bind(this);
        this.updateQuantity = this.updateQuantity.bind(this);
    }

        // need a get request for the user cart and recipe table
    componentDidMount() {
        this.getCart()

        axios.get('/auth/me')
            .then( response => {
                this.setState({
                    loggedIn: response.data
                })
            })

    }   
    
    getCart() {
        axios.get('/getcart')
            .then( response => {
                console.log("RAWR",response.data)
                // this.setState({
                //     cart: response.data
                // })
                if (response.data.length === 0) {
                    this.setState({
                        fullCart: false
                    })
                } else {
                    this.setState({
                        fullCart: true,
                        cart: response.data
                    })
                }
            })

        axios.get('/gettotal')
            .then( response => {
                console.log('CART TOTAL', response.data[0].sum)
                this.setState({
                    cartTotal: response.data[0].sum
                })
            })
    }

    deleteItem(id) {

        axios.delete('/deleteitem', {params: {recipesid: id}})
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

        axios.put('/updatequantity', config)
            .then(response => {
                this.getCart()            
            })
    }


    render() {
        // need to map the cart items into the CartItems component
        console.log('SOMETHING', this.state.fullCart)
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

        let emptyCart = <EmptyCart />

        console.log('Updated', this.state.cart)

        return (
            <div className='cart-main'>
                <Header />
                <div className='cart-items-container'>
                    { this.state.fullCart
                        ?
                            cartItems
                        :
                            emptyCart
                    }
                </div>
                {
                    this.state.fullCart
                    ?
                        <CartButtons cartTotal={this.state.cartTotal} />
                    :
                        null
                }
            </div>
        );
    }
}

export default Menu;