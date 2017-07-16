import React, { Component } from 'react';

import { NavBar } from 'react-bootstrap';

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
                {/*<nav className='mobile'>
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
                </nav>*/}

                <nav className='desktop row'>
                    <div className='menu-items'>
                        <div className='col-lg-1'>logo</div>
                        <p className='col-lg-1'>Why Plants</p>
                        <p className='col-lg-1'>How It Works</p>
                        <p className='col-lg-1'>Menu</p>
                        <p className='col-lg-1'>Plans</p>
                    </div>
                    <div className='col-lg-4'></div>
                    <div className='login'>
                        <p className='col-lg-1'>login</p>
                        <p className='col-lg-1'>sign up</p>
                    </div>
                </nav>

            </div>
        );
    }
}

export default MainNavBar;