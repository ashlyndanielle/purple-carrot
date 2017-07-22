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
        // I think this is where I'll do my put request?
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

        let recipeModal = this.state.mealPlans.map((meal, i) => {
            return(
                <Modals
                    key={i}
                    meal={meal}
                    className='thumbnails'
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