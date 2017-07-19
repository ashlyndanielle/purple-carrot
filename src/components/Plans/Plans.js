import React, { Component } from 'react';
import axios from 'axios';

import PlanDetail from './PlanDetail';

import './Scss/Plans.css';

class Plans extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mealPlans: []
        }
    }

    componentDidMount () {
        axios.get('http://localhost:3001/getplans')
            .then( response => {
                // console.log('response', response)
                this.setState({
                    mealPlans: response.data
                })
            })
    }

    render() {
        
        let mealPlan = this.state.mealPlans.map((meal, i) => {
            return(
                <PlanDetail 
                    id={meal.id}
                    name={meal.name}
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

export default Plans;