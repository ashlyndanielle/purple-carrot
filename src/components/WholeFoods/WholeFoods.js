import React, { Component } from 'react';

import NutritionHeader from './NutritionHeader';
import Collage from './Collage';
import Food from './Food';

import './Scss/WholeFoods.css';

class WholeFoods extends Component {
    render() {
        return (
            <div className='why-plants-main'>
                <NutritionHeader />
                <Collage />
                <Food />
            </div>
        );
    }
}

export default WholeFoods;