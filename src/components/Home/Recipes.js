import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CarouselSlide from './CarouselSlide';

import greenBolt from '../../Images/homeView/green-bolts.png';

import './Scss/Recipes.css';



class Recipes extends Component {
    render() {

        return (
            <div className='recipes-main'>
                <div className='row top-half'>
                    <div className='header col-sm-4 col-sm-offset-4'>
                        <h1>SO HEALTHY <br/>SO DELICIOUS</h1>
                        <img src={greenBolt} alt="" className='green-bolt'/>
                        <div className='header-text'>
                            <p>Each week, our chefs create new dishes inspired by seasonal flavors that will tempt, delight, and energize.</p>
                        </div>
                    </div>
                    <div className='menu-button col-sm-4 col-sm-offset-4'>
                        <Link to='/menu' className='button'>select from our recipes</Link>
                    </div>
                </div>

                <CarouselSlide />
            
            </div>
        );
    }
}

export default Recipes;