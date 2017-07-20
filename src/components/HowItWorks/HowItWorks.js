import React, { Component } from 'react';

import Header from './Header';
import Ingredients from './Ingredients';

import './Scss/HowItWorks.css';

class HowItWorks extends Component {
    render() {
        return (
            <div className='works-main'>
                <Header />
                <Ingredients />
            </div>
        );
    }
}

export default HowItWorks;