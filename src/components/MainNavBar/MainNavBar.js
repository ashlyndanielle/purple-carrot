import React, { Component } from 'react';

import WhyPlants from '../WhyPlants/WhyPlants';
import HowItWorks from '../HowItWorks/HowItWorks';
import Menu from '../Menu/Menu';
import Plans from '../Plans/Plans';
import Tb12 from '../Tb12/Tb12';
import Gifts from '../Gifts/Gifts';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class MainNavBar extends Component {
    render() {
        return (
            <div className='main-nav-container'>
                <nav className='mobile'>
                    <div className='ham'>ham</div>
                    <div className='logo'>logo</div>
                </nav>
                
                <nav className='tablet'>
                    <div className='left'>
                        <div className='ham'>ham</div>
                        <div className='logo'>logo</div>
                    </div>
                    <div className='right'>
                        <p>login</p>
                        <p>sign up</p>
                    </div>
                </nav>

                <nav className='desktop'>
                    <div className='menu-items'>
                        <div>logo</div>
                        <p>Why Plants</p>
                        <p>How It Works</p>
                        <p>Menu</p>
                        <p>Plans</p>
                        <p>Tb12</p>
                        <p>Gifts</p>
                    </div>
                    <div className='login'>
                        <p>login</p>
                        <p>sign up</p>
                    </div>
                </nav>
            </div>
        );
    }
}

export default MainNavBar;