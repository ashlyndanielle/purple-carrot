import React, { Component } from 'react';

import Header from './Header';
import Power from './Power';
import Promo from './Promo';

import './Scss/Home.css';

class Home extends Component {
    render() {
        return (
            <div className='home-main'>
                <Header />
                <Power />
                <Promo />
            </div>
        );
    }
}

export default Home;