import React, { Component } from 'react';
import axios from 'axios';

import RecipesDetails from './RecipesDetails';

import './Scss/RecipesMain.css';

class RecipesMain extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mealPlans: [],
            loggedIn: {}
        }
    }

    componentDidMount () {
        // this sets loggedin as the user object returned from auth0
        axios.get('http://localhost:3001/auth/me')
            .then( response => {
                this.setState({
                    loggedIn: response.data
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

    render() {
        
        let mealPlan = this.state.mealPlans.map((meal, i) => {
            return(
                <RecipesDetails 
                    price={meal.price}
                    name={meal.name}
                    imageFull={meal.imagefull}
                    thumbnail={meal.thumbnail}
                    description={meal.description}
                    servings={meal.servings}
                    calories={meal.calories}
                    fat={meal.fat}
                    carbs={meal.carbs}
                    protein={meal.protein}
                    key={i} 
                />
                // <div key={i}>ID: {meal.id} -- NAME: {meal.name}</div>
            )
        })
      

        return (
            <div className='plans-main'>
                Plans Parent Component

                 { mealPlan } 
            </div>
        );
    }
}

export default RecipesMain;