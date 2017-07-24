import React, { Component } from 'react';
import axios from 'axios';

import RecipesDetails from './RecipesDetails';
import Modals from './Modals';

import './Scss/RecipesMain.css';

class RecipesMain extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mealPlans: [],
            loggedIn: {},
            quantity: 1,
            userid: null
        }

        this.addToCart = this.addToCart.bind(this);
        this.handleQuantity = this.handleQuantity.bind(this);

    }

    componentDidMount () {
        // this sets loggedin as the user object returned from auth0
        axios.get('/auth/me')
            .then( response => {
                console.log('FIND USER ID HERE', response)
                this.setState({
                    loggedIn: response.data,
                    userid: response.data.id
                })
            })
        // this is my database call to get my recipes
        axios.get('http://localhost:3001/getRecipes')
            .then( response => {
                this.setState({
                    mealPlans: response.data
                })
            })
    }

    addToCart(meal) {
        let config = {
            recipeid: meal.id,
            userid: this.state.userid,
            quantity: this.state.quantity,
            recipeThumbnail: meal.thumbnail,
            name: meal.name,
            price: meal.price
        }

        axios.post('http://localhost:3001/addtocart', config)
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
        
        // let mealPlan = this.state.mealPlans.map((meal, i) => {
        //     return(
        //         <RecipesDetails 
        //             price={meal.price}
        //             name={meal.name}
        //             imageFull={meal.imagefull}
        //             thumbnail={meal.thumbnail}
        //             description={meal.description}
        //             servings={meal.servings}
        //             calories={meal.calories}
        //             fat={meal.fat}
        //             carbs={meal.carbs}
        //             protein={meal.protein}
        //             key={i} 
        //         />
        //         // <div key={i}>ID: {meal.id} -- NAME: {meal.name}</div>
        //     )
        // })

        let recipeModal = this.state.mealPlans.map( meal => {
            return(
                <Modals
                    key={meal.id}
                    meal={meal}
                    addToCart={this.addToCart}
                    handleQuantity={this.handleQuantity}
                />
            )
        })
      

        return (
            <div className='plans-main'>
                 <div className='thumbnails-container'>
                     { recipeModal }
                </div>
            </div>
        );
    }
}

export default RecipesMain;