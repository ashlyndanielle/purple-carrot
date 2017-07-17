import React, { Component } from 'react';

import greenBolt from '../../Images/homeView/green-bolts.png';

import './Scss/Recipes.css';

class Recipes extends Component {
    render() {
        return (
            <div className='recipes-main'>
                <div className='header'>
                    <h1>SO HEALTHY <br/>SO DELICIOUS</h1>
                    <img src={greenBolt} alt="" className='green-bolt'/>
                    <div className='header-text col-sm-6 col-sm-offset-3'>
                        <p>Each week, our chefs create new dishes inspired by seasonal flavors that will tempt, delight, and energize.</p>
                    </div>
                </div>
                <div className='menu-button'>
                </div>
                <div className='carousel'></div>
            </div>
        );
    }
}

export default Recipes;