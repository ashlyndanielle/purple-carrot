import React, { Component } from 'react';

import Header from './Header';
import Power from './Power';
import Promo from './Promo';
import Recipes from './Recipes';
import Yoga from './Yoga';
import World from './World';
import Satisfy from './Satisfy';
import Articles from './Articles';

import './Scss/Home.css';

class Home extends Component {
    render() {
        return (
            <div className='home-main'>
                <Header />
                <Power />
                <Promo />
                <Recipes />
                <Yoga />
                <World />
                <Satisfy />
                <Articles />
            </div>
        );
    }
}

export default Home;