import React, { Component } from 'react';

import Header from './Header';
import Power from './Power';

import './Scss/Home.css';

class Home extends Component {
    render() {
        return (
            <div className='home-main'>
                <Header />
                <Power />
            </div>
        );
    }
}

export default Home;