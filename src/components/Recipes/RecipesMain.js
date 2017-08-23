import React, { Component } from 'react';
import axios from 'axios';

import Modals from './Modals';
import RecipesHeader from './RecipesHeader';

import './Scss/RecipesMain.css';

class RecipesMain extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mealPlans: [],
            loggedIn: false,
            quantity: 1,
            userid: null
        }

        this.addToCart = this.addToCart.bind(this);
        this.handleQuantity = this.handleQuantity.bind(this);
        this.authenticationCall = this.authenticationCall.bind(this);

    }

    authenticationCall() {
        axios.get('/auth/me')
            .then( response => {
                console.log('FIND USER ID HERE', response)
                this.setState({
                    userid: response.data.id
                })

            if (response.data === '') {
                this.setState({
                    loggedIn: false
                })
            } else {
                this.setState({
                    loggedIn: true
                })
            }
        })
    }

    componentDidMount () {
        // this sets loggedin as the user object returned from auth0
        this.authenticationCall();
        // this is my database call to get my recipes
        axios.get('/getRecipes')
            .then( response => {
                this.setState({
                    mealPlans: response.data
                })
            })
    }

    addToCart(meal) {
        // config is going to pass in the parameters I need for my post request
        let config = {
            recipeid: meal.id,
            userid: this.state.userid,
            quantity: this.state.quantity,
            recipeThumbnail: meal.thumbnail,
            name: meal.name,
            price: meal.price
        }

        axios.post('/addtocart', config)
            .then(response => {
                console.log('CONFIG NAME', config.name);
                // console.log('CONFIG', config)
            })
    }

    handleQuantity(e) {
        this.setState({
            quantity: e.target.value
        })
    }

    render() {
 
        let recipeModal = this.state.mealPlans.map( meal => {
            return(
                <Modals
                    key={meal.id}
                    meal={meal}
                    addToCart={this.addToCart}
                    handleQuantity={this.handleQuantity}
                    authenticationCall={this.authenticationCall}
                    loggedIn={this.state.loggedIn}
                />
            )
        })
      

        return (
            <div className='plans-main'>
                <RecipesHeader />
                <div className='thumbnails-container'>
                     { recipeModal }
                </div>
            </div>
        );
    }
}

export default RecipesMain;