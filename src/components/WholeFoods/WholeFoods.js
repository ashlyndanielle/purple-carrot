import React, { Component } from 'react';

import NutritionHeader from './NutritionHeader';
import Collage from './Collage';

import './Scss/WholeFoods.css';

class WholeFoods extends Component {
    render() {
        return (
            <div className='why-plants-main'>
                <NutritionHeader />
                <Collage />
            </div>
        );
    }
}

export default WholeFoods;